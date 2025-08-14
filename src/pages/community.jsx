// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Globe, Heart, MessageCircle, Share2, TrendingUp, Users, Clock, Award } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('trending');
  const [posts, setPosts] = useState([{
    id: 1,
    type: 'AI绘画',
    title: '梦幻星空下的城堡',
    author: '创意艺术家',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop',
    content: '使用AI创作的超现实主义风格作品，灵感来源于梵高的星空',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    likes: 1234,
    comments: 89,
    shares: 45,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isLiked: false
  }, {
    id: 2,
    type: 'AI写作',
    title: '人工智能的未来展望',
    author: '科技作家',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
    content: '深度分析AI技术在未来十年的发展趋势和对社会的影响',
    likes: 892,
    comments: 56,
    shares: 23,
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    isLiked: true
  }, {
    id: 3,
    type: 'AI作曲',
    title: '电子音乐新作品',
    author: '音乐制作人',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    content: '最新创作的电子音乐，融合了传统东方元素和现代节拍',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    likes: 756,
    comments: 34,
    shares: 12,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    isLiked: false
  }]);
  const toggleLike = id => {
    setPosts(prev => prev.map(post => post.id === id ? {
      ...post,
      isLiked: !post.isLiked,
      likes: post.isLiked ? post.likes - 1 : post.likes + 1
    } : post));
  };
  const formatTime = date => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return '刚刚';
    if (hours < 24) return `${hours}小时前`;
    return `${Math.floor(hours / 24)}天前`;
  };
  return <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-900 dark:via-cyan-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            社区广场
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            分享你的AI创作，与全球创作者交流
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-teal-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">12.5K</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">活跃用户</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">45.2K</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">作品总数</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">234K</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">总点赞数</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">89%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">活跃度</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trending">热门</TabsTrigger>
            <TabsTrigger value="latest">最新</TabsTrigger>
            <TabsTrigger value="following">关注</TabsTrigger>
            <TabsTrigger value="my">我的</TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(post => <Card key={post.id} className="group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{post.author}</span>
                          <span className="text-xs text-slate-500">•</span>
                          <span className="text-xs text-slate-500">{formatTime(post.timestamp)}</span>
                        </div>
                        <span className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">
                          {post.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mt-3 mb-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{post.content}</p>

                    {post.image && <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-3" />}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" onClick={() => toggleLike(post.id)}>
                          <Heart size={16} className={post.isLiked ? 'fill-red-500 text-red-500' : ''} />
                          <span className="ml-1">{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle size={16} />
                          <span className="ml-1">{post.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 size={16} />
                          <span className="ml-1">{post.shares}</span>
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">查看详情</Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-6">
            <div className="text-center py-12">
              <Clock className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">最新内容即将上线...</p>
            </div>
          </TabsContent>

          <TabsContent value="following" className="mt-6">
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">关注创作者的内容即将上线...</p>
            </div>
          </TabsContent>

          <TabsContent value="my" className="mt-6">
            <div className="text-center py-12">
              <Award className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">登录后查看你的作品...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
}