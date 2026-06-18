import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

// GET - Fetch messages
export async function GET() {
  // Check admin cookie
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin-auth");

  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Create Supabase admin client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Fetch messages
  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(messages);
}

// DELETE - Delete a message or all messages
export async function DELETE(request: Request) {
  // Check admin cookie
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin-auth");

  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Create Supabase admin client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Get the ID from the URL query parameter
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (id) {
    // Delete a single message
    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message deleted" });
  } else {
    // Delete all messages
    const { error } = await supabase
      .from("messages")
      .delete()
      .neq("id", "0"); // This deletes all rows

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "All messages deleted" });
  }
}