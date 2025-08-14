// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Users, MessageCircle, Bot, Send, Sparkles, Settings } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Input } from '@/components/ui';

export default function GroupChatPage() {
  const [messages, setMessages] = useState([{
    id: 1,
    user: 'AI助手小智',
    avatar: '🤖',
    content: '大家好！欢迎来到AI群聊室，我是小智，今天我们来讨论一下人工智能的未来发展。',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    role: 'assistant'
  }, {
    id: 2,
    user: '创意AI小艺',
    avatar: '🎨',
    content: '我觉得AI在艺术创作方面会有巨大突破！想象一下，AI可以创作出人类想象不到的艺术形式。',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    role: 'assistant'
  }, {
    id: 3,
    user: '科学AI小科',
    avatar: '🔬',
    content: '从科学角度看，AI在药物研发和材料科学方面的应用前景非常广阔。可以大大加速研究进程。',
    timestamp: new Date(Date.now() - 6 * 60 * 1000),
    role: 'assistant'
  }, {
    id: 4,
    user: '伦理AI小德',
    avatar: '⚖️',
    content: '但是我们也要考虑AI发展的伦理问题。如何确保AI的发展符合人类价值观是一个重要课题。',
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
    role: 'assistant'
  }, {
    id: 5,
    user: '用户',
    avatar: '👤',
    content: '各位AI朋友，你们觉得AI会取代人类的工作吗？',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    role: 'user'
  }]);
  const [input, setInput] = useState('');
  const [activeBots, setActiveBots] = useState(['小智', '小艺', '小科', '小德']);
  const [isTyping, setIsTyping] = useState(false);
  const bots = [{
    name: '小智',
    avatar: '🤖',
    description: '通用AI助手'
  }, {
    name: '小艺',
    avatar: '🎨',
    description: '创意AI'
  }, {
    name: '小科',
    avatar: '🔬',
    description: '科学AI'
  }, {
    name: '小德',
    avatar: '⚖️',
    description: '伦理AI'
  }, {
    name: '小商',
    avatar: '💼',
    description: '商业AI'
  }, {
    name: '小教',
    avatar: '📚',
    description: '教育AI'
  }];
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = {
      id: Date.now(),
      user: '用户',
      avatar: '👤',
      content: input,
      timestamp: new Date(),
      role: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      const responses = [{
        user: '小智',
        avatar: '🤖',
        content: '这是一个很好的问题！我认为AI不会完全取代人类，而是会成为人类的得力助手，让我们能够专注于更有创造性的工作。'
      }, {
        user: '小艺',
        avatar: '🎨',
        content: '我同意小智的看法！AI更像是一种新的创作工具，就像画笔对于画家一样，它扩展了我们的创造力，而不是取代我们。'
      }, {
        user: '小科',
        avatar: '🔬',
        content: '从数据角度看，虽然AI会改变就业结构，但同时也会创造新的工作机会。关键是我们要学会与AI协作。'
      }];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const aiMessage = {
        id: Date.now() + 1,
        ...randomResponse,
        timestamp: new Date(),
        role: 'assistant'
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };
  const toggleBot = botName => {
    setActiveBots(prev => prev.includes(botName) ? prev.filter(b => b !== botName) : [...prev, botName]);
  };
  return <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-900 dark:via-rose-900 dark:to-red-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
            AI群聊室
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            与多个AI角色同时对话，体验多元思维碰撞
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Bot Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Bot className="mr-2 h-4 w-4" />
                  AI角色
                </h3>
                <div className="space-y-3">
                  {bots.map(bot => <div key={bot.name} className={`p-3 rounded-lg cursor-pointer transition-all ${activeBots.includes(bot.name) ? 'bg-pink-100 dark:bg-pink-900 border border-pink-300 dark:border-pink-700' : 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600'}`} onClick={() => toggleBot(bot.name)}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-lg">
                          {bot.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{bot.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{bot.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  群聊设置
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>自动回复</span>
                    <Button size="sm" variant="outline">开启</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>消息通知</span>
                    <Button size="sm" variant="outline">开启</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>AI活跃度</span>
                    <select className="text-xs p-1 rounded border bg-slate-50 dark:bg-slate-700">
                      <option>高</option>
                      <option>中</option>
                      <option>低</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-[600px] flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-pink-500" />
                    <span className="font-semibold">AI群聊室</span>
                    <span className="text-sm text-slate-500">{activeBots.length} 个AI在线</span>
                  </div>
                  <Users className="h-5 w-5 text-slate-400" />
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map(message => <div key={message.id} className={`flex items-start space-x-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                      {message.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white">
                          {message.avatar}
                        </div>}
                      <div className={`max-w-md ${message.role === 'user' ? 'order-1' : ''}`}>
                        <div className={`p-3 rounded-2xl ${message.role === 'user' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
                          {message.role === 'assistant' && <p className="text-xs font-medium mb-1">{message.user}</p>}
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-slate-500'}`}>
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      {message.role === 'user' && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white order-3">
                          {message.avatar}
                        </div>}
                    </div>)}

                  {isTyping && <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white">
                        🤖
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-700">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>}
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="输入消息..." className="flex-1 bg-slate-50 dark:bg-slate-700 border-0 rounded-xl" />
                  <Button onClick={handleSend} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl">
                    <Send size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}