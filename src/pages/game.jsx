// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Gamepad2, Play, Download, Share2, Sparkles, Trophy, Users, Settings, Heart } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Textarea, Input } from '@/components/ui';

export default function GamePage() {
  const [prompt, setPrompt] = useState('创建一个简单的2D平台跳跃游戏');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedGames, setGeneratedGames] = useState([{
    id: 1,
    title: '像素冒险',
    description: '经典的2D平台跳跃游戏，收集金币，躲避敌人',
    genre: '平台跳跃',
    difficulty: '简单',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    plays: 15420,
    likes: 892,
    isLiked: false
  }, {
    id: 2,
    title: '太空射击',
    description: '刺激的太空射击游戏，击败外星入侵者',
    genre: '射击',
    difficulty: '中等',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop',
    plays: 12300,
    likes: 756,
    isLiked: true
  }, {
    id: 3,
    title: '解谜大师',
    description: '烧脑的解谜游戏，挑战你的智力极限',
    genre: '解谜',
    difficulty: '困难',
    thumbnail: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&h=300&fit=crop',
    plays: 8900,
    likes: 543,
    isLiked: false
  }]);
  const genres = ['平台跳跃', '射击', '解谜', '角色扮演', '策略', '竞速', '休闲', '动作'];
  const difficulties = ['简单', '中等', '困难', '专家'];
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const newGame = {
        id: Date.now(),
        title: `AI游戏 #${generatedGames.length + 1}`,
        description: prompt,
        genre: genres[Math.floor(Math.random() * genres.length)],
        difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
        thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400&h=300&fit=crop`,
        plays: 0,
        likes: 0,
        isLiked: false
      };
      setGeneratedGames(prev => [newGame, ...prev]);
      setIsGenerating(false);
    }, 5000);
  };
  const toggleLike = id => {
    setGeneratedGames(prev => prev.map(game => game.id === id ? {
      ...game,
      isLiked: !game.isLiked,
      likes: game.isLiked ? game.likes - 1 : game.likes + 1
    } : game));
  };
  return <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-900 dark:via-rose-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
            AI游戏创作
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            设计独特的游戏体验，让创意无限延伸
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Creation Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  游戏设计
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">游戏概念</label>
                  <Textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="描述你想要创建的游戏..." className="min-h-[100px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">游戏类型</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {genres.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">难度等级</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600">
                  {isGenerating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      创作中...
                    </> : <>
                      <Gamepad2 className="mr-2 h-4 w-4" />
                      开始创作
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Trophy className="mr-2 h-4 w-4" />
                  创作统计
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">总游戏数</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">总游玩次数</span>
                    <span className="font-semibold">89.2K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">玩家评分</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Gallery */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">游戏库</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {generatedGames.map(game => <Card key={game.id} className="group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm">
                                <Play size={24} className="text-white" />
                              </Button>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2">
                            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                              {game.difficulty}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-1">{game.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                            {game.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                                {game.genre}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <span className="flex items-center">
                                <Play size={14} className="mr-1" />
                                {game.plays.toLocaleString()}
                              </span>
                              <span className="flex items-center">
                                <Heart size={14} className="mr-1" />
                                {game.likes.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 mt-4">
                            <Button className="flex-1" size="sm">
                              <Play size={16} className="mr-1" />
                              开始游戏
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => toggleLike(game.id)}>
                              <Heart size={16} className={game.isLiked ? 'fill-red-500 text-red-500' : ''} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}