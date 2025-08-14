// @ts-ignore;
import React, { useState, useRef } from 'react';
// @ts-ignore;
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Download, Share2, Heart, Sparkles } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Slider, Input, Textarea } from '@/components/ui';

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [volume, setVolume] = useState(70);
  const [prompt, setPrompt] = useState('创作一段轻松愉快的电子音乐');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTracks, setGeneratedTracks] = useState([{
    id: 1,
    title: '梦幻星空',
    genre: '电子',
    mood: '轻松',
    duration: 180,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    audioUrl: '#',
    likes: 342,
    isLiked: false
  }, {
    id: 2,
    title: '城市节拍',
    genre: '流行',
    mood: '活力',
    duration: 210,
    cover: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop',
    audioUrl: '#',
    likes: 256,
    isLiked: true
  }, {
    id: 3,
    title: '雨夜钢琴',
    genre: '古典',
    mood: '宁静',
    duration: 240,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    audioUrl: '#',
    likes: 189,
    isLiked: false
  }]);
  const genres = ['电子', '流行', '古典', '爵士', '摇滚', '民谣', '嘻哈', '氛围'];
  const moods = ['轻松', '活力', '宁静', '忧伤', '浪漫', '神秘', '史诗', '梦幻'];
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    // 模拟生成过程
    setTimeout(() => {
      const newTrack = {
        id: Date.now(),
        title: `AI创作 #${generatedTracks.length + 1}`,
        genre: genres[Math.floor(Math.random() * genres.length)],
        mood: moods[Math.floor(Math.random() * moods.length)],
        duration: Math.floor(Math.random() * 120) + 120,
        cover: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=300&h=300&fit=crop`,
        audioUrl: '#',
        likes: 0,
        isLiked: false
      };
      setGeneratedTracks(prev => [newTrack, ...prev]);
      setIsGenerating(false);
    }, 4000);
  };
  const toggleLike = id => {
    setGeneratedTracks(prev => prev.map(track => track.id === id ? {
      ...track,
      isLiked: !track.isLiked,
      likes: track.isLiked ? track.likes - 1 : track.likes + 1
    } : track));
  };
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900 dark:via-red-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            AI作曲创作
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            创作独特的音乐作品，让旋律在指尖流淌
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
                  <label className="block text-sm font-medium mb-2">音乐描述</label>
                  <Textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="描述你想要的音乐风格..." className="min-h-[80px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">音乐类型</label>
                    <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                      {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">情绪氛围</label>
                    <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                      {moods.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  {isGenerating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      创作中...
                    </> : <>
                      <Music className="mr-2 h-4 w-4" />
                      开始创作
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Player */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" alt="Now Playing" className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover" />
                  <h4 className="font-semibold">梦幻星空</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">电子音乐</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <Slider value={[currentTime]} max={duration} step={1} onValueChange={([value]) => setCurrentTime(value)} className="w-full" />
                  </div>

                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <Button variant="ghost" size="sm">
                      <SkipBack size={20} />
                    </Button>
                    <Button size="lg" className="rounded-full" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <SkipForward size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <Volume2 size={16} />
                    <Slider value={[volume]} max={100} step={1} onValueChange={([value]) => setVolume(value)} className="flex-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Music Library */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">音乐库</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generatedTracks.map(track => <Card key={track.id} className="group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img src={track.cover} alt={track.title} className="w-16 h-16 rounded-lg object-cover" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{track.title}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {track.genre} • {track.mood}
                            </p>
                            <p className="text-xs text-slate-500">
                              {formatTime(track.duration)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" onClick={() => toggleLike(track.id)}>
                              <Heart size={16} className={track.isLiked ? 'fill-red-500 text-red-500' : ''} />
                              <span className="ml-1 text-xs">{track.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download size={16} />
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