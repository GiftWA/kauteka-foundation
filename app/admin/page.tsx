import { supabaseAdmin } from "../../lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: messages, error } = await supabaseAdmin
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-10">Error loading messages.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Inbox</h1>

      <div className="space-y-6">
        {messages?.map((msg) => (
          <div
            key={msg.id}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <p className="text-sm text-gray-500">
              {new Date(msg.created_at).toLocaleString()}
            </p>
            <h2 className="text-xl font-semibold mt-2">
              {msg.name}
            </h2>
            <p className="text-gray-600">{msg.email}</p>
            <p className="mt-4">{msg.message}</p>
          </div>
        ))}
      </div>
    </main>
  );
}