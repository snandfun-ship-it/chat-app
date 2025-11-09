'use client';

import { useState, useEffect, JSX } from 'react';
import { useRouter } from 'next/router';
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  useCreateChatClient,
} from 'stream-chat-react';
import type { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/v2/index.css';
import { useSearchParams } from 'next/navigation';
import { EmojiPicker } from "stream-chat-react/emojis";

const apiKey = 'cnfe3kpxhv5h';

export default function PrivateChat(): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [clientReady, setClientReady] = useState(false);
  const searchParams = useSearchParams()
  useEffect(() => {
    setUserId(searchParams.get('person'))
  }, [])
  
  // Create the Stream client (typed)
  const client: StreamChat | null = useCreateChatClient({
    apiKey,
    tokenOrProvider: userId === 'Jaskarandeep' ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjYwOGQzMTQtYzU4Yy00NWQxLTk3ZDAtNzMwY2JhOTQ5ZGIyIn0._M0n_dFpTaW0Eo8mRPZQJbm3CKp_lnQPbz-epub8RDk' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmIyNDQyYjgtZDhiOC00ZjM5LTg1NWQtNjNlMGU4ZGU5NzE3In0.CrlNecxmIlWOrLeDDXwZEtIbIWVC5F_D7zOl3X7l0ms',
    userData: userId ? { id: userId === 'Jaskarandeep' ? 'b608d314-c58c-45d1-97d0-730cba949db2' : '2b2442b8-d8b8-4f39-855d-63e0e8de9717', name: userId, image:"https://instagram.fixc4-3.fna.fbcdn.net/v/t1.15752-9/566492912_1162821315239215_8611799929617078573_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqSvgYk_XeEQ7kNvwEblXmQ&_nc_oc=AdlQK8zcC9I9BH7jbKVbTJi_K4h2Z8lyiIBfgaDsMLHKBRv_S6iikMQOfgUjd0P6U28&_nc_zt=23&_nc_ht=instagram.fixc4-3.fna&oh=03_Q7cD3wHNoEF7MVCPAOyCnJqfwvSwBLRgDwFLO0L1fOXKXZhY9w&oe=693851B0", } : { id: 'b608d314-c58c-45d1-97d0-730cba949db2', name: 'Jaskarandeep',image:"https://instagram.fixc4-3.fna.fbcdn.net/v/t1.15752-9/566492912_1162821315239215_8611799929617078573_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqSvgYk_XeEQ7kNvwEblXmQ&_nc_oc=AdlQK8zcC9I9BH7jbKVbTJi_K4h2Z8lyiIBfgaDsMLHKBRv_S6iikMQOfgUjd0P6U28&_nc_zt=23&_nc_ht=instagram.fixc4-3.fna&oh=03_Q7cD3wHNoEF7MVCPAOyCnJqfwvSwBLRgDwFLO0L1fOXKXZhY9w&oe=693851B0" },
  });


  // Wait for client to initialize
  useEffect(() => {
    if (client) setClientReady(true);
  }, [client]);

  if (!clientReady || !client)
    return (
      <div className="flex items-center justify-center h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white text-lg">
        Connecting to chat…
      </div>
    );

  const members = ['2b2442b8-d8b8-4f39-855d-63e0e8de9717', 'b608d314-c58c-45d1-97d0-730cba949db2'];

  // Create or get the private channel
  const channel = client.channel('messaging', 'jaskarandeep-harsimrat', {
  name: "💞 Jaskarandeep ❤️ Harsimrat 💞",
  image: "https://instagram.fixc4-3.fna.fbcdn.net/v/t1.15752-9/566492912_1162821315239215_8611799929617078573_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqSvgYk_XeEQ7kNvwEblXmQ&_nc_oc=AdlQK8zcC9I9BH7jbKVbTJi_K4h2Z8lyiIBfgaDsMLHKBRv_S6iikMQOfgUjd0P6U28&_nc_zt=23&_nc_ht=instagram.fixc4-3.fna&oh=03_Q7cD3wHNoEF7MVCPAOyCnJqfwvSwBLRgDwFLO0L1fOXKXZhY9w&oe=693851B0",
  members,
} as any);

  return (
    <div className="h-screen xl:bg-linear-to-br bg-black from-indigo-900 via-purple-900 to-black text-white flex items-center justify-center">
      <div className="w-full xl:max-w-3xl h-full bg-black/40 backdrop-blur-md xl:rounded-2xl shadow-xl overflow-hidden border border-white/10">
        <Chat client={client} theme="str-chat__theme-dark">
          <Channel EmojiPicker={EmojiPicker} channel={channel}>
            <Window>
              <ChannelHeader image='https://instagram.fixc4-3.fna.fbcdn.net/v/t1.15752-9/566492912_1162821315239215_8611799929617078573_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqSvgYk_XeEQ7kNvwEblXmQ&_nc_oc=AdlQK8zcC9I9BH7jbKVbTJi_K4h2Z8lyiIBfgaDsMLHKBRv_S6iikMQOfgUjd0P6U28&_nc_zt=23&_nc_ht=instagram.fixc4-3.fna&oh=03_Q7cD3wHNoEF7MVCPAOyCnJqfwvSwBLRgDwFLO0L1fOXKXZhY9w&oe=693851B0' title="💞 Jaskarandeep ❤️ Harsimrat 💞" />
              <MessageList />
              <MessageInput
              audioRecordingEnabled
                focus
              />
            </Window>
          </Channel>
        </Chat>
      </div>
    </div>
  );
}
