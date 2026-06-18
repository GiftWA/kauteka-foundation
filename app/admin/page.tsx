"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DeleteModal from "@/components/DeleteModal";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin-check");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        await fetchMessages();
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const fetchMessages = async () => {
    try {
      const messagesRes = await fetch("/api/admin-messages");
      if (!messagesRes.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await messagesRes.json();
      setMessages(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin-logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Error during logout:", error);
      window.location.href = "/admin/login";
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin-messages?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages(messages.filter((msg: any) => msg.id !== id));
      } else {
        alert("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("An error occurred while deleting");
    } finally {
      setDeleting(null);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const res = await fetch("/api/admin-messages", {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages([]);
      } else {
        alert("Failed to delete all messages");
      }
    } catch (error) {
      console.error("Error deleting all messages:", error);
      alert("An error occurred while deleting");
    }
  };

  const openDeleteModal = (id: string, name: string) => {
    setDeleteTarget({ id, name });
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      handleDelete(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-green-700 text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-10 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md border border-green-100">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.href = "/admin/login"}
            className="mt-4 px-4 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-white rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600 bg-white flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="KAFO Foundation" 
                width={48} 
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-800">Admin Inbox</h1>
              <p className="text-gray-600 mt-1">
                {messages?.length || 0} message{messages?.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString([], { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            {messages?.length > 0 && (
              <button
                onClick={() => setShowDeleteAllModal(true)}
                className="px-4 py-2 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors font-medium"
              >
                Delete All
              </button>
            )}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`px-4 py-2 text-sm rounded-xl transition-colors font-medium ${
                isLoggingOut 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-100 hover:bg-green-200 text-green-800 hover:text-green-900'
              }`}
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>

        {/* Messages */}
        {messages && messages.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-green-100">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No messages yet</h2>
            <p className="text-gray-500">Your inbox is empty. Check back later for new messages.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages?.map((message: any) => (
              <div
                key={message.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-green-800 text-lg">
                      {message.name || "Anonymous"}
                    </h3>
                    <p className="text-gray-600 text-sm break-all">
                      {message.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 whitespace-nowrap bg-green-50 px-3 py-1 rounded-full border border-green-100">
                      {new Date(message.created_at).toLocaleString([], {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => openDeleteModal(message.id, message.name || "Anonymous")}
                      disabled={deleting === message.id}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
                    >
                      {deleting === message.id ? (
                        <svg className="animate-spin h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-3 bg-green-50/50 rounded-xl p-4 border border-green-50">
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeleteTarget(null);
        }}
        onConfirm={confirmDelete}
        title={`Delete message from ${deleteTarget?.name || "Anonymous"}?`}
        message="This message will be permanently removed from your inbox."
        isDeletingAll={false}
      />

      {/* Delete All Modal */}
      <DeleteModal
        isOpen={showDeleteAllModal}
        onClose={() => setShowDeleteAllModal(false)}
        onConfirm={handleDeleteAll}
        title="Delete All Messages?"
        message="All messages will be permanently removed from your inbox."
        isDeletingAll={true}
      />
    </div>
  );
}