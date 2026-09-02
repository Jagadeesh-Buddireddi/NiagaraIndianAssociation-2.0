"use client";

import { useState } from "react";
import {
  Bot,
  MessageCircle,
  RefreshCw,
  Send,
  X,
} from "lucide-react";

const suggestions = [
  "What are the membership plans?",
  "What are the membership benefits?",
  "What are the upcoming events?",
  "How can I volunteer?",
  "How can I sponsor NIA?",
];

const responses: Record<string, string> = {
  "What are the membership plans?":
    "NIA membership information will be available here. We are currently preparing the membership options and registration process.",

  "What are the membership benefits?":
    "NIA members can participate in community programs, cultural events, networking opportunities and other member activities.",

  "What are the upcoming events?":
    "Our upcoming events will be displayed here. Check the Events section for the latest NIA programs and celebrations.",

  "How can I volunteer?":
    "We'd love to have you volunteer with NIA. Please contact the association and let us know how you'd like to contribute.",

  "How can I sponsor NIA?":
    "NIA welcomes organizations and businesses interested in supporting community programs and events. Please contact us for sponsorship opportunities.",
};

type Message = {
  sender: "bot" | "user";
  text: string;
};

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Namaste! I'm your NIA Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      {
        sender: "user",
        text: trimmed,
      },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          sender: "bot",
          text:
            responses[trimmed] ??
            "Thanks for your question! I'm still learning about the Niagara Indian Association. Please contact us directly if you need immediate assistance.",
        },
      ]);
    }, 500);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "👋 Namaste! I'm your NIA Assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[100] flex h-[620px] w-[390px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl">

          {/* HEADER */}
          <div className="flex items-center justify-between bg-[#071A2D] px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Bot
                  size={23}
                  className="text-[#0B1F3A]"
                />

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#071A2D] bg-green-500" />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  NIA AI Assistant
                </h3>

                <p className="mt-0.5 flex items-center gap-1 text-xs text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online
                </p>
              </div>

            </div>

            <div className="flex items-center gap-1">

              <button
                type="button"
                onClick={resetChat}
                aria-label="Reset chat"
                className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <RefreshCw size={16} />
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

            </div>

          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">

            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "rounded-br-md bg-orange-500 text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

          </div>

          {/* QUICK QUESTIONS */}
          <div className="border-t border-slate-100 bg-white px-4 py-3">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Quick Questions
            </p>

            <div className="flex gap-2 overflow-x-auto pb-2">

              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                >
                  {suggestion}
                </button>
              ))}

            </div>

          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-3"
          >

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5 focus-within:border-orange-400">

              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600"
              >
                <Send size={16} />
              </button>

            </div>

            <p className="mt-2 text-center text-[9px] text-slate-400">
              AI may make mistakes. Verify important information.
            </p>

          </form>

        </div>
      )}

      {/* FLOATING BUTTON */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open NIA AI Assistant"
          className="fixed bottom-5 right-5 z-[99] flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
        >
          <MessageCircle size={27} />

          <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
        </button>
      )}
    </>
  );
}