// app/api/socket/route.ts
import { Server } from "socket.io";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

declare global {
  var io: Server | undefined;
  var httpServer: any;
}

export async function GET(req: NextRequest) {
  if (!globalThis.io) {
    if (!globalThis.httpServer) {
      return NextResponse.json({ error: "No HTTP server found" }, { status: 500 });
    }

    globalThis.io = new Server(globalThis.httpServer, {
      cors: { origin: "*" },
    });

    globalThis.io.on("connection", (socket) => {
      console.log("🟢 A user connected:", socket.id);

      socket.on("send-message", (data) => {
        globalThis.io?.emit("receive-message", data);
      });

      socket.on("disconnect", () => {
        console.log("🔴 A user disconnected:", socket.id);
      });
    });

    console.log("✅ Socket.io server initialized!");
  }

  return new Response("Socket server running!", { status: 200 });
}
