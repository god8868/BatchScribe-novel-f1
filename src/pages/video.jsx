// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Film, Play, Download, Share2, Heart, Sparkles, Clock, Users } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Textarea, Input, Badge } from '@/components/ui';

export default function VideoPage() {
  const [prompt, setPrompt] = useState('创作一个关于未来城市的科幻短剧');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideos, setGeneratedVideos] = useState([{
    id: 1,
    title: '未来城市2049',
    description: '在高度发达的未来城市中，人类与AI和谐共存的温馨故事',
    duration: 180,
    thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=225&fit=crop',
    genre: '科幻',
    views: 15420,
    likes: 892,
    isLiked: false
  }, {
    id: 2,
    title: '时间旅行者',
    description: '一个关于穿越时空拯救爱情的动人故事',
    duration: 240,
    thumbnail: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=225&fit=crop',
    genre: '爱情',
    views: 12300,
    likes: 756,
    isLiked: true
  }, {
    id: 3,
    title: 'AI觉醒',
    description: '当人工智能获得自我意识后的伦理思考',
    duration: 300,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    genre: '剧情',
    views: 8900,
    likes: 543,
    isLiked: false
  }]);
  const genres = ['科幻', '爱情', '剧情', '喜剧', '悬疑', '动作', '动画', '纪录片'];
  const durations = [60, 120, 180, 240, 300];
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const newVideo = {
        id: Date.now(),
        title: `AI短剧 #${generatedVideos.length + 1}`,
        description: prompt,
        duration: durations[Math.floor(Math.random() * durations.length)],
        thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400&h=225&fit=crop`,
        genre: genres[Math.floor(Math.random() * genres.length)],
        views: 0,
        likes: 0,
        isLiked: false
      };
      setGeneratedVideos(prev => [newVideo, ...prev]);
      setIsGenerating(false);
    }, 5000);
  };
  const toggleLike = id => {
    setGeneratedVideos(prev => prev.map(video => video.id === id ? {
      ...video,
      isLiked: !video.isLiked,
      likes: video.isLiked ? video.likes - 1 : video.likes + 1
    } : video));
  };
  const formatDuration = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  return <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            AI短剧创作
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            创作精彩的视频故事，让想象变为现实
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Creation Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  创作设置
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">故事概念</label>
                  <Textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="描述你想要创作的短剧..." className="min-h-[100px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">类型</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {genres.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">时长</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {durations.map(d => <option key={d} value={d}>{formatDuration(d)}</option>)}
                  </select>
                </div>

                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                  {isGenerating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      创作中...
                    </> : <>
                      <Film className="mr-2 h-4 w-4" />
                      开始创作
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">创作统计</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">总作品数</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">总播放量</span>
                    <span className="font-semibold">156.8K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">获赞总数</span>
                    <span className="font-semibold">8.2K</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Gallery */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">作品库</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {generatedVideos.map(video => <Card key={video.id} className="group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm">
                                <Play size={24} className="text-white" />
                              </Button>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="bg-black/50 text-white">
                              {formatDuration(video.duration)}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-1">{video.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                            {video.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <span className="flex items-center">
                                <Play size={14} className="mr-1" />
                                {video.views.toLocaleString()}
                              </span>
                              <span className="flex items-center">
                                <Heart size={14} className="mr-1" />
                                {video.likes.toLocaleString()}
                              </span>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm" onClick={() => toggleLike(video.id)}>
                                <Heart size={16} className={video.isLiked ? 'fill-red-500 text-red-500' : ''} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share2 size={16} />
                              </Button>
                            </div>
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