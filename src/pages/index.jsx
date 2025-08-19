// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Play, Music, Video, MessageCircle, BookOpen, Gamepad2, Users, Workflow, Brain, Settings } from 'lucide-react';

// @ts-ignore;
import { NavigationCard } from './components/NavigationCard';
export default function IndexPage(props) {
  const {
    $w
  } = props;
  const navigateTo = $w.utils.navigateTo;
  const features = [{
    title: 'AI音乐',
    description: '探索AI创作的无限音乐可能',
    icon: <Music className="h-6 w-6 text-white" />,
    color: 'bg-purple-500',
    pageId: 'music'
  }, {
    title: 'AI视频',
    description: '发现AI生成的精彩视频内容',
    icon: <Video className="h-6 w-6 text-white" />,
    color: 'bg-red-500',
    pageId: 'video'
  }, {
    title: '群聊',
    description: '与AI助手实时交流互动',
    icon: <MessageCircle className="h-6 w-6 text-white" />,
    color: 'bg-blue-500',
    pageId: 'groupchat'
  }, {
    title: 'AI漫画',
    description: '创作属于你的AI漫画故事',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    color: 'bg-pink-500',
    pageId: 'comic'
  }, {
    title: 'AI编程',
    description: '智能代码生成与优化',
    icon: <Gamepad2 className="h-6 w-6 text-white" />,
    color: 'bg-green-500',
    pageId: 'coding'
  }, {
    title: 'AI游戏',
    description: '体验AI驱动的游戏世界',
    icon: <Play className="h-6 w-6 text-white" />,
    color: 'bg-yellow-500',
    pageId: 'game'
  }, {
    title: '社区',
    description: '加入AI创作者社区',
    icon: <Users className="h-6 w-6 text-white" />,
    color: 'bg-indigo-500',
    pageId: 'community'
  }, {
    title: '工作流',
    description: 'AI自动化工作流管理',
    icon: <Workflow className="h-6 w-6 text-white" />,
    color: 'bg-cyan-500',
    pageId: 'workflow'
  }, {
    title: '知识库',
    description: 'AI知识管理与学习',
    icon: <Brain className="h-6 w-6 text-white" />,
    color: 'bg-teal-500',
    pageId: 'knowledge'
  }, {
    title: '设置',
    description: '个性化配置与偏好',
    icon: <Settings className="h-6 w-6 text-white" />,
    color: 'bg-gray-500',
    pageId: 'settings'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-4">
            AI创作平台
          </h1>
          <p className="text-xl text-slate-300">
            探索人工智能的无限可能
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(feature => <NavigationCard key={feature.pageId} title={feature.title} description={feature.description} icon={feature.icon} color={feature.color} onClick={() => navigateTo({
          pageId: feature.pageId,
          params: {}
        })} />)}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-slate-400">
            选择你感兴趣的功能开始探索AI世界
          </p>
        </div>
      </div>
    </div>;
}