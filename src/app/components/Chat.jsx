import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Loader2,
  Bot,
  User,
  RefreshCw,
  X,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="flex items-center space-x-2 p-2"
  >
    <div className="flex space-x-1">
      {[0, 100, 200].map((delay, idx) => (
        <div
          key={idx}
          className={`w-2 h-2 bg-[#5CBE2E] rounded-full animate-bounce`}
          style={{ animationDelay: `${delay}ms` }}
        ></div>
      ))}
    </div>
  </motion.div>
);

const ChatMessage = ({ message, index }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className={`flex items-start gap-2 mb-4 ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "text-[#5CBE2E] bg-[#5CBE2E1f]" : "bg-gray-200/50"
        }`}
      >
        {isUser ? <User size={18} className="text-white" /> : <Bot size={18} />}
      </motion.div>
      <div className={`flex flex-col  ${isUser ? "items-end" : "items-start"}`}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`px-4 py-2 rounded-[8px] max-w-sm ${
            isUser ? "text-[#5CBE2E] bg-[#5CBE2E1f]" : "bg-gray-100/50  "
          }`}
        >
          {message.content}
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-xs text-gray-500 mt-1"
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </motion.span>
      </div>
    </motion.div>
  );
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat-messages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setError(null);
    const userMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const aiMessage = {
        role: "assistant",
        content: data.response,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages([]);
      localStorage.removeItem("chat-messages");
    }
  };

  return (
    <>
      <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed z-[999999] bottom-2 right-4"
        >
          <Button
            className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg   "
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
              }}
              transition={{ duration: 0.3 }}
              className=" text-[#5CBE2E] bg-[#5CBE2E1f] font-extrabold  rounded-full p-3 "
            >
              {isOpen ? (
                <X size={28} strokeWidth={6} />
              ) : (
                <MessageCircle size={28} strokeWidth={6} />
              )}
            </motion.div>
          </Button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed  z-[99999] bottom-16 sm:right-1 right-0 w-full sm:max-w-sm max-w-[320px]  bg-[#00000018] backdrop-blur-sm "
            >
              <Card className="border-[#5CBE2E]  ">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="p-4 border-b border-b-[#5CBE2E] flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Bot className="text-[#5CBE2E] " />
                    </motion.div>
                    <h2 className="font-semibold">Portfolio Assistant</h2>
                  </div>
                  <div className="flex gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={clearChat}
                        title="Clear chat history"
                      >
                        <RefreshCw size={20} />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                <CardContent className="p-4  ">
                  <div className="h-[300px] overflow-y-auto mb-4 space-y-4">
                    <AnimatePresence>
                      {messages.length === 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="text-center text-gray-500 mt-8"
                        >
                          👋 Hi! I&apos;m an AI assistant that can tell you
                          about my professional background and experience. I can
                          only discuss information that&apos;s in my portfolio.
                          For other questions, please contact me through
                          LinkedIn
                        </motion.div>
                      )}

                      {messages.map((message, index) => (
                        <ChatMessage
                          key={index}
                          message={message}
                          index={index}
                        />
                      ))}

                      {loading && <TypingIndicator className="" />}

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-center text-sm p-2"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div ref={messagesEndRef} />
                  </div>

                  <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="flex gap-2"
                  >
                    <Input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      disabled={loading}
                      className="flex-1 border-[#346d19] !rounded-lg "
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        className="text-[#5CBE2E] bg-[#5CBE2E1f] rounded-full  "
                        disabled={loading || !input.trim()}
                      >
                        {loading ? (
                          <Loader2
                            strokeWidth={4}
                            className="w-4 h-4 animate-spin"
                          />
                        ) : (
                          <Send strokeWidth={4} className="w-4 h-4" />
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Chat;
