"use client";
import { Suspense } from "react";
import ChatComponent from "@/components/ChatComponent"
function Chat() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatComponent/>
    </Suspense>
  )
}

export default Chat
