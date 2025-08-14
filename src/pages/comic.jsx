// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { BookOpen, Download, Share2, Sparkles, Palette, Grid3x3, Heart } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Textarea, Input } from '@/components/ui';

export default function ComicPage() {
  const [prompt, setPrompt] = useState('创作一个关于超级英雄日常生活的四格漫画');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedComics, setGeneratedComics] = useState([{
    id: 1,
    title: '超级英雄的日常',
    description: '当超级英雄不拯救世界时，他们也在为房租发愁',
    panels: 4,
    style: '日式漫画',
    thumbnail: 'https://images.unsplash.com/photo-1634157703702-3c124b455499?w=400&h=300&fit=crop',
    likes: 567,
    isLiked: false
  }, {
    id: 2,
    title: 'AI小助手',
    description: '一个AI助手在人类世界的搞笑日常',
    panels: 6,
    style: '美式漫画',
    thumbnail: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=300&fit=crop',
    likes: 423,
    isLiked: true
  }, {
    id: 3,
    title: '未来校园',
    description: '在科技高度发达的未来学校发生的有趣故事',
    panels: 8,
    style: '国漫',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    likes: 334,
    isLiked: false
  }]);
  const styles = ['日式漫画', '美式漫画', '国漫', '欧式漫画', '像素风格', '水墨风格', '卡通风格', '写实风格'];
  const panelCounts = [4, 6, 8, 10, 12];
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const newComic = {
        id: Date.now(),
        title: `AI漫画 #${generatedComics.length + 1}`,
        description: prompt,
        panels: panelCounts[Math.floor(Math.random() * panelCounts.length)],
        style: styles[Math.floor(Math.random() * styles.length)],
        thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400&h=300&fit=crop`,
        likes: 0,
        isLiked: false
      };
      setGeneratedComics(prev => [newComic, ...prev]);
      setIsGenerating(false);
    }, 4500);
  };
  const toggleLike = id => {
    setGeneratedComics(prev => prev.map(comic => comic.id === id ? {
      ...comic,
      isLiked: !comic.isLiked,
      likes: comic.isLiked ? comic.likes - 1 : comic.likes + 1
    } : comic));
  };
  return <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900 dark:via-orange-900 dark:to-red-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
            AI漫画创作
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            创作有趣的漫画故事，让想象跃然纸上
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
                  <Textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="描述你想要创作的漫画故事..." className="min-h-[100px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">漫画风格</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {styles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">分镜数量</label>
                  <select className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {panelCounts.map(p => <option key={p} value={p}>{p}格</option>)}
                  </select>
                </div>

                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  {isGenerating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      创作中...
                    </> : <>
                      <BookOpen className="mr-2 h-4 w-4" />
                      开始创作
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Grid3x3 className="mr-2 h-4 w-4" />
                  创作模板
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600">
                    四格搞笑漫画
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600">
                    日常温馨故事
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600">
                    科幻冒险系列
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comic Gallery */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">漫画画廊</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {generatedComics.map(comic => <Card key={comic.id} className="group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img src={comic.thumbnail} alt={comic.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="absolute top-2 right-2">
                            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                              {comic.panels}格
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-1">{comic.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                            {comic.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                                {comic.style}
                              </span>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm" onClick={() => toggleLike(comic.id)}>
                                <Heart size={16} className={comic.isLiked ? 'fill-red-500 text-red-500' : ''} />
                                <span className="ml-1 text-xs">{comic.likes}</span>
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