import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, Copy, Check, MessageSquare, Compass, ArrowDown } from 'lucide-react';
import { Destination, UserPreferences } from '../types/travel';

interface SmartTravelAssistantProps {
  destination: Destination;
  preferences: UserPreferences;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const SmartTravelAssistant: React.FC<SmartTravelAssistantProps> = ({
  destination,
  preferences,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am your **Travel Chapter Assistant** for **${destination.name}**.\n\nEvery destination can become a beautiful chapter of your life. Ask me anything—from secret cafes and cultural etiquette to custom 1-day or 10-day itineraries!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    `Plan a 3-day ${destination.name} trip focused on food and culture.`,
    `I only have one day. What should I experience?`,
    `I have a low budget. Create a 5-day itinerary.`,
    `I love nature and photography. What should I do?`,
    `Teach me some useful local phrases.`,
    `Give me a peaceful 10-day experience.`
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          destination: {
            name: destination.name,
            country: destination.country,
            region: destination.region,
            tagline: destination.tagline,
            culture: destination.culture,
            food: destination.food,
          },
          preferences,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || `Here are some recommendations for ${destination.name}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          text: `For ${destination.name}, explore its historic monuments in the morning, taste local specialties at busy neighborhood spots for lunch, and enjoy the sunset from a scenic overlook.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="assistant-section" className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>AI Smart Travel Companion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Ask Your Travel Chapter Assistant
          </h2>
          <p className="text-sm text-stone-400 mt-2 font-light">
            Grounded in <strong>{destination.name}</strong>’s geography, culture, food, and your preferred <strong>{preferences.travelStyle}</strong>.
          </p>
        </div>

        {/* Quick Prompts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:border-amber-400 hover:text-amber-300 text-xs whitespace-nowrap transition-all shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Chat Card */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl flex flex-col h-[560px] overflow-hidden">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[88%] sm:max-w-[80%] ${
                    isUser ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isUser
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-amber-400 border border-stone-700'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-4 rounded-2xl relative group ${
                      isUser
                        ? 'bg-amber-500 text-stone-950 font-medium'
                        : 'bg-stone-900 border border-stone-800 text-stone-200'
                    }`}
                  >
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                      {msg.text}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 text-[10px] text-stone-400/80">
                      <span>{msg.timestamp}</span>
                      {!isUser && (
                        <button
                          onClick={() => copyText(msg.id, msg.text)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 hover:text-amber-300"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy advice</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-xl bg-stone-800 text-amber-400 border border-stone-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-stone-400 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span>Writing your personalized guidance for {destination.name}...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-stone-900/90 border-t border-stone-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask about secret spots, food, 3-day plans, or culture in ${destination.name}...`}
                className="flex-1 bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-5 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold rounded-xl text-sm flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 shrink-0"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
