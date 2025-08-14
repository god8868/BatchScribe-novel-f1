// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { Send, Bot, User, Sparkles } from 'lucide-react';
// @ts-ignore;
import { Button, Input } from '@/components/ui';

import { cn } from '@/lib/utils';
export function ChatInterface() {
  const [messages, setMessages] = useState([{
    id: 1,
    role: 'assistant',
    content: '你好！我是AI助手，有什么可以帮助你的吗？',
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(scrollToBottom, [messages]);
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: '我理解你的问题，让我为你详细解答...',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  return <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map(message => <div key={message.id} className={cn("flex items-start space-x-3", message.role === 'user' ? "justify-end" : "justify-start")}>
                {message.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>}
                <div className={cn("max-w-md px-4 py-3 rounded-2xl", message.role === 'user' ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white dark:bg-slate-800 shadow-lg")}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                {message.role === 'user' && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>}
              </div>)}
            {isTyping && <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex space-x-2">
              <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="输入你的问题..." className="flex-1 bg-white/80 dark:bg-slate-700/80 border-0 rounded-xl" />
              <Button onClick={handleSend} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>;
}