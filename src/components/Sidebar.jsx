// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { MessageSquare, Palette, FileText, Music, Film, Users, BookOpen, Code, Gamepad2, Globe, Bot, Database, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
const menuItems = [{
  id: 'chat',
  icon: MessageSquare,
  label: 'AI对话',
  color: 'from-blue-500 to-cyan-500'
}, {
  id: 'painting',
  icon: Palette,
  label: 'AI绘画',
  color: 'from-purple-500 to-pink-500'
}, {
  id: 'writing',
  icon: FileText,
  label: 'AI写作',
  color: 'from-green-500 to-emerald-500'
}, {
  id: 'music',
  icon: Music,
  label: 'AI作曲',
  color: 'from-orange-500 to-red-500'
}, {
  id: 'video',
  icon: Film,
  label: 'AI短剧',
  color: 'from-indigo-500 to-purple-500'
}, {
  id: 'groupchat',
  icon: Users,
  label: 'AI群聊',
  color: 'from-pink-500 to-rose-500'
}, {
  id: 'comic',
  icon: BookOpen,
  label: 'AI漫画',
  color: 'from-yellow-500 to-orange-500'
}, {
  id: 'coding',
  icon: Code,
  label: 'AI编码',
  color: 'from-gray-500 to-slate-500'
}, {
  id: 'game',
  icon: Gamepad2,
  label: 'AI游戏',
  color: 'from-red-500 to-pink-500'
}, {
  id: 'community',
  icon: Globe,
  label: '社区广场',
  color: 'from-teal-500 to-cyan-500'
}, {
  id: 'workflow',
  icon: Bot,
  label: '智能体',
  color: 'from-violet-500 to-purple-500'
}, {
  id: 'knowledge',
  icon: Database,
  label: '知识库',
  color: 'from-amber-500 to-yellow-500'
}];
export function Sidebar({
  activeItem,
  onItemClick,
  isCollapsed,
  onToggle
}) {
  return <div className={cn("relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 transition-all duration-300", isCollapsed ? "w-16" : "w-64")}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              {!isCollapsed && <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI全能助手
                </h1>}
              <button onClick={onToggle} className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            </div>

            <nav className="space-y-2">
              {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return <button key={item.id} onClick={() => onItemClick(item.id)} className={cn("w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group", isActive ? "bg-gradient-to-r " + item.color + " text-white shadow-lg shadow-" + item.color.split('-')[1] + "-500/25" : "text-slate-400 hover:text-white hover:bg-slate-800/50")}>
                    <Icon size={20} className={cn("transition-transform duration-200", isActive ? "scale-110" : "group-hover:scale-110")} />
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                  </button>;
        })}
            </nav>

            <div className="absolute bottom-4 left-4 right-4">
              <button onClick={() => onItemClick('settings')} className={cn("w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group", activeItem === 'settings' ? "bg-gradient-to-r from-slate-600 to-slate-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50")}>
                <Settings size={20} />
                {!isCollapsed && <span className="font-medium">设置</span>}
              </button>
            </div>
          </div>
        </div>;
}