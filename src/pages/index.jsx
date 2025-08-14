// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { MessageSquare, Palette, FileText, Music, Film, Users, BookOpen, Code, Gamepad2, Globe, Bot, Database, Settings } from 'lucide-react';

import { Sidebar } from '@/components/Sidebar';
import { ChatInterface } from '@/components/ChatInterface';
import { FeatureCard } from '@/components/FeatureCard';
export default function App(props) {
  const [activeItem, setActiveItem] = useState('chat');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const features = [{
    id: 'chat',
    icon: MessageSquare,
    title: 'AI对话',
    description: '智能对话助手，解答你的所有疑问',
    color: 'from-blue-500 to-cyan-500'
  }, {
    id: 'painting',
    icon: Palette,
    title: 'AI绘画',
    description: '将文字转化为精美图像',
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'writing',
    icon: FileText,
    title: 'AI写作',
    description: '创作高质量的文章和内容',
    color: 'from-green-500 to-emerald-500'
  }, {
    id: 'music',
    icon: Music,
    title: 'AI作曲',
    description: '生成独特的音乐作品',
    color: 'from-orange-500 to-red-500'
  }, {
    id: 'video',
    icon: Film,
    title: 'AI短剧',
    description: '创作精彩的视频内容',
    color: 'from-indigo-500 to-purple-500'
  }, {
    id: 'groupchat',
    icon: Users,
    title: 'AI群聊',
    description: '多人AI对话体验',
    color: 'from-pink-500 to-rose-500'
  }, {
    id: 'comic',
    icon: BookOpen,
    title: 'AI漫画',
    description: '创作有趣的漫画故事',
    color: 'from-yellow-500 to-orange-500'
  }, {
    id: 'coding',
    icon: Code,
    title: 'AI编码',
    description: '智能代码生成与优化',
    color: 'from-gray-500 to-slate-500'
  }, {
    id: 'game',
    icon: Gamepad2,
    title: 'AI游戏',
    description: '生成游戏内容和关卡',
    color: 'from-red-500 to-pink-500'
  }];
  const renderContent = () => {
    switch (activeItem) {
      case 'chat':
        return <ChatInterface />;
      case 'community':
        return <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">社区广场</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map(feature => <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} color={feature.color} onClick={() => setActiveItem(feature.id)} />)}
                </div>
              </div>;
      case 'workflow':
        return <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">智能体/工作流</h1>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <p className="text-slate-600 dark:text-slate-400">智能体和工作流功能即将上线...</p>
                </div>
              </div>;
      case 'knowledge':
        return <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">知识库</h1>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <p className="text-slate-600 dark:text-slate-400">知识库功能即将上线...</p>
                </div>
              </div>;
      case 'settings':
        return <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">设置</h1>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <p className="text-slate-600 dark:text-slate-400">设置功能即将上线...</p>
                </div>
              </div>;
      default:
        return <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {features.find(f => f.id === activeItem)?.title || '功能'}
                </h1>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <p className="text-slate-600 dark:text-slate-400">
                    {features.find(f => f.id === activeItem)?.description || '功能开发中...'}
                  </p>
                </div>
              </div>;
    }
  };
  return <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
          <Sidebar activeItem={activeItem} onItemClick={setActiveItem} isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
          <main className="flex-1 overflow-hidden">
            {renderContent()}
          </main>
        </div>;
}