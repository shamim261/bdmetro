"use clinet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRequest } from "@/hooks/useRequest";
import { Loader, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const AiSection = () => {
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<
    { type: "user" | "ai"; content: string }[]
  >([
    {
      type: "ai",
      content:
        "Hello! I can help you with information about BD Metro routes, fares, and schedules. What would you like to know?",
    },
  ]);

  const { data, error, loading, request } = useRequest<string>("/api/response");

  const handleSendMessage = async () => {
    setMessage("");
    if (message.trim()) {
      // Add user message to chat
      setChatMessages([...chatMessages, { type: "user", content: message }]);

      await request(message);

      // Simulate AI response

      setChatMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content: data!,
        },
      ]);
      // Clear input
    }
  };

  console.log(loading);

  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <div className="flex items-center mb-6">
        <MessageSquare className="h-5 w-5 text-emerald-600 mr-2" />
        <h3 className="text-2xl font-bold text-gray-800">Metro Assistant</h3>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.type === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4 flex gap-2">
          <Input
            placeholder="Ask about routes, fares, or schedules..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
            disabled={loading}
          />
          <Button
            disabled={loading}
            onClick={handleSendMessage}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {loading ? (
              <Loader className="h-4 w-4" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiSection;
