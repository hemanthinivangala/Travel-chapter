import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Copy,
  Check,
  Volume2,
  RefreshCw,
  MessageSquare,
  Maximize2,
  Minimize2,
  User,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { Destination, UserPreferences } from '../types/travel';

interface FloatingChatbotProps {
  destination: Destination;
  preferences: UserPreferences;
  onOpenBookingModal?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const FloatingChatbot: React.FC<FloatingChatbotProps> = ({
  destination,
  preferences,
  onOpenBookingModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Namaste & Greetings! I am your personalized **Travel Chapter AI Assistant** for **${destination.name}**.\n\nI can answer any question about **${destination.name}** or any place worldwide—from temple darshan tokens, local transit, and dress codes, to secret street food and custom itineraries tailored to your ${preferences.groupType} trip! What would you like to know?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Dynamic suggestion pills tailored to current destination
  const isTirupati = destination.id === 'tirupati' || destination.name.toLowerCase().includes('tirupati') || destination.name.toLowerCase().includes('tirumala');

  const suggestedQuestions = isTirupati
    ? [
        'How to book TTD ₹300 Special Entry Darshan & Laddu tokens?',
        'What is the strict dress code for Sri Venkateswara Temple?',
        'Should I climb the Alipiri footpath or take the ghat road bus?',
        'Where can I get pure vegetarian Annaprasadam and breakfast?',
      ]
    : [
        `What are the must-eat local dishes in ${destination.name}?`,
        `How do I travel around ${destination.name} on a ${preferences.budget} budget?`,
        `What are the best lesser-known hidden spots here?`,
        `Help me plan a memorable day for a ${preferences.groupType} trip.`,
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, loading, isOpen]);

  // Update welcome message when destination changes
  useEffect(() => {
    setMessages((prev) => {
      const hasOnlyWelcome = prev.length === 1 && prev[0].id === 'welcome';
      if (hasOnlyWelcome) {
        return [
          {
            id: 'welcome',
            sender: 'assistant',
            text: `Namaste & Welcome to **${destination.name}**! I am your personalized Travel Companion.\n\nAsk me anything about ${destination.name}, local customs, stays, transport, or any small town in the world!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [destination.id, destination.name]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
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
      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || `Here is personalized advice for ${destination.name}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: `For **${destination.name}**, remember to check local opening hours and booking tokens in advance. If you'd like an itinerary or specific recommendation, feel free to ask!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking === id) {
      window.speechSynthesis.cancel();
      setIsSpeaking(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#`_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(null);
    utterance.onerror = () => setIsSpeaking(null);
    setIsSpeaking(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: `Chat cleared. Ask me any question about **${destination.name}** or any other place in the world!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <aside aria-label="Travel AI Assistant" className="fixed bottom-5 right-5 z-50 print:hidden">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold text-sm shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-amber-400/40"
          aria-label="Open Travel Chapter AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-stone-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-amber-400 animate-pulse" />
          </div>
          <span className="hidden sm:inline font-serif tracking-tight">Ask Travel AI</span>
          <span className="text-[10px] bg-stone-950/20 text-stone-950 px-2 py-0.5 rounded-full font-sans font-semibold">
            {destination.name.split('&')[0].trim()}
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`flex flex-col bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 ${
            isExpanded
              ? 'w-[92vw] sm:w-[540px] h-[82vh] max-h-[750px]'
              : 'w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 flex items-center justify-between text-stone-100">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold shrink-0 shadow-md shadow-amber-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-sm text-white truncate">
                    Travel Chapter AI
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                </div>
                <div className="text-[11px] text-amber-300/90 truncate flex items-center gap-1">
                  <span>Context: {destination.name}</span>
                  <span className="text-stone-500">·</span>
                  <span className="text-stone-400">{preferences.budget}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                title="Clear chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors hidden sm:block"
                title={isExpanded ? 'Restore size' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2 bg-stone-950/80 border-b border-stone-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Suggested:
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q)}
                disabled={loading}
                className="text-[11px] text-stone-300 hover:text-amber-300 bg-stone-900 border border-stone-800 hover:border-amber-400/50 px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Flow */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((m) => {
              const isUser = m.sender === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isUser
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-800 text-amber-300 border border-stone-700'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed relative group ${
                      isUser
                        ? 'bg-amber-500 text-stone-950 font-medium rounded-tr-sm'
                        : 'bg-stone-950 text-stone-200 border border-stone-800 rounded-tl-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line text-[12px] sm:text-[13px] leading-relaxed">
                      {m.text}
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-2 text-[10px] text-stone-400 opacity-80">
                      <span>{m.timestamp}</span>

                      {!isUser && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleSpeak(m.text, m.id)}
                            className="hover:text-amber-300 p-0.5 transition-colors"
                            title="Listen"
                          >
                            <Volume2 className={`w-3.5 h-3.5 ${isSpeaking === m.id ? 'text-amber-400 animate-pulse' : ''}`} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopy(m.text, m.id)}
                            className="hover:text-amber-300 p-0.5 transition-colors"
                            title="Copy text"
                          >
                            {copiedId === m.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-stone-800 text-amber-400 border border-stone-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-stone-950 border border-stone-800 rounded-2xl rounded-tl-sm p-3.5 text-stone-400 text-xs flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Consulting destination guide & personalized travel data...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-stone-950 border-t border-stone-800">
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
                placeholder={`Ask any question about ${destination.name} or anywhere...`}
                disabled={loading}
                className="flex-1 bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 font-bold"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-stone-500 mt-1.5 px-1">
              <span>Personalized with your travel profile & preferences</span>
              <span className="text-amber-400 font-semibold">Gemini 3.8 Flash</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
