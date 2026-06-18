"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin-check");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        
        // Fetch messages
        const messagesRes = await fetch("/api/admin-messages");
        if (!messagesRes.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await messagesRes.json();
        setMessages(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    try {
      console.log("Attempting logout...");
      
      const res = await fetch("/api/admin-logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Logout response status:", res.status);
      
      // Even if the API fails, we should clear local state and redirect
      // This ensures the user can always logout
      setMessages([]);
      
      // Use window.location for a hard redirect to ensure cookies are cleared
      window.location.href = "/admin/login";
      
    } catch (error) {
      console.error("Error during logout:", error);
      // Even on error, redirect to login
      window.location.href = "/admin/login";
    } finally {
      setIsLoggingOut(false);
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
                  // Fallback if logo doesn't load
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
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString([], { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
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
                  <span className="text-xs text-gray-400 whitespace-nowrap bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    {new Date(message.created_at).toLocaleString([], {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="mt-3 bg-green-50/50 rounded-xl p-4 border border-green-50">
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}