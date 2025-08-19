// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Play, Heart, Search, Bookmark, Plus, Upload, MessageCircle, Filter } from 'lucide-react';

// @ts-ignore;
import { Button, Card, CardContent, Input } from './components/ui';

// @ts-ignore;
import { BackButton } from './components/BackButton';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoList } from './components/VideoList';
import { UploadModal } from './components/UploadModal';
import { CommentSection } from './components/CommentSection';
import { TagFilter } from './components/TagFilter';
export default function VideoPage(props) {
  const {
    $w
  } = props;
  const navigateBack = $w.utils.navigateBack;
  const [videos, setVideos] = useState([{
    id: 1,
    title: 'AI艺术创作教程',
    description: '学习如何使用AI工具创作令人惊叹的艺术作品',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop',
    duration: 1800,
    views: 15420,
    likes: 892,
    tags: ['AI', '艺术', '教程', '创作'],
    isLiked: true,
    uploadDate: new Date('2024-01-15'),
    channel: 'AI创意工作室',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop'
  }, {
    id: 2,
    title: '深度学习基础入门',
    description: '从零开始学习深度学习的核心概念和实践方法',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop',
    duration: 3600,
    views: 8932,
    likes: 567,
    tags: ['深度学习', '教程', '编程', 'AI'],
    isLiked: false,
    uploadDate: new Date('2024-01-14'),
    channel: '技术先锋',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop'
  }, {
    id: 3,
    title: 'AI音乐制作实战',
    description: '探索AI如何改变音乐创作的未来',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
    duration: 2400,
    views: 12350,
    likes: 1234,
    tags: ['AI', '音乐', '创作', '实战'],
    isLiked: true,
    uploadDate: new Date('2024-01-13'),
    channel: '音乐科技',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop'
  }, {
    id: 4,
    title: '神经网络可视化',
    description: '直观理解神经网络的工作原理',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
    duration: 2700,
    views: 25670,
    likes: 1890,
    tags: ['神经网络', '可视化', 'AI', '科普'],
    isLiked: false,
    uploadDate: new Date('2024-01-12'),
    channel: 'AI科普',
    channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop'
  }, {
    id: 5,
    title: 'AI绘画技巧分享',
    description: '专业AI绘画师的实用技巧和创作心得',
    thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=225&fit=crop',
    duration: 2100,
    views: 34560,
    likes: 2345,
    tags: ['AI', '绘画', '技巧', '分享'],
    isLiked: true,
    uploadDate: new Date('2024-01-11'),
    channel: '创意无限',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop'
  }, {
    id: 6,
    title: '机器学习项目实战',
    description: '完整的机器学习项目从数据到部署的全过程',
    thumbnail: 'https://images.unsplash.com/photo-1677442135137-2ba2eeb1b6d1?w=400&h=225&fit=crop',
    duration: 4200,
    views: 18920,
    likes: 1567,
    tags: ['机器学习', '项目', '实战', '部署'],
    isLiked: false,
    uploadDate: new Date('2024-01-10'),
    channel: '项目实战',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop'
  }]);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [likedVideos, setLikedVideos] = useState(videos.filter(v => v.isLiked).map(v => v.id));
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [comments, setComments] = useState([{
    id: 1,
    videoId: 1,
    text: '这个教程太棒了！学到了很多',
    author: '学习者小王',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop',
    likes: 15,
    dislikes: 0,
    timestamp: new Date('2024-01-15'),
    replies: []
  }, {
    id: 2,
    videoId: 1,
    text: '讲解很清晰，期待更多内容',
    author: 'AI爱好者',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
    likes: 8,
    dislikes: 1,
    timestamp: new Date('2024-01-14'),
    replies: []
  }]);
  const allTags = [...new Set(videos.flatMap(v => v.tags))];
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || video.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const formatViews = views => {
    if (views >= 10000) {
      return `${(views / 10000).toFixed(1)}万`;
    }
    return views.toString();
  };
  const formatDate = date => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    return date.toLocaleDateString('zh-CN');
  };
  const toggleLike = videoId => {
    setLikedVideos(prev => prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]);
  };
  const handleUpload = videoData => {
    const newVideo = {
      id: Date.now(),
      title: videoData.title,
      description: videoData.description,
      thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=225&fit=crop',
      duration: 1800,
      views: 0,
      likes: 0,
      tags: videoData.tags,
      isLiked: false,
      uploadDate: new Date(),
      channel: '我的频道',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop'
    };
    setVideos([newVideo, ...videos]);
  };
  const addComment = comment => {
    setComments([...comments, comment]);
  };
  const likeComment = commentId => {
    setComments(comments.map(c => c.id === commentId ? {
      ...c,
      likes: c.likes + 1
    } : c));
  };
  const dislikeComment = commentId => {
    setComments(comments.map(c => c.id === commentId ? {
      ...c,
      dislikes: c.dislikes + 1
    } : c));
  };
  const videoComments = comments.filter(c => c.videoId === currentVideo.id);
  return <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        <BackButton onClick={navigateBack} />
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
            AI视频世界
          </h1>
          <p className="text-slate-300">
            探索AI创作的精彩视频内容
          </p>
        </div>

        {/* 控制栏 */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex gap-4">
            <TagFilter tags={filteredVideos} selectedTag={selectedTag} onTagSelect={setSelectedTag} allTags={allTags} />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <Input type="text" placeholder="搜索视频..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-slate-800 border-slate-600 text-slate-100" />
            </div>
            <Button onClick={() => setShowUploadModal(true)} className="bg-red-500 hover:bg-red-600">
              <Upload className="h-4 w-4 mr-2" />
              上传视频
            </Button>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <VideoList videos={filteredVideos} onVideoSelect={setCurrentVideo} onLikeToggle={toggleLike} likedVideos={likedVideos} formatTime={formatTime} formatViews={formatViews} formatDate={formatDate} />
          
          <VideoPlayer video={currentVideo} isPlaying={isPlaying} currentTime={currentTime} volume={volume} onPlayToggle={() => setIsPlaying(!isPlaying)} onLikeToggle={toggleLike} likedVideos={likedVideos} formatTime={formatTime} formatViews={formatViews} formatDate={formatDate} />
        </div>

        {/* 评论区 */}
        <div className="mt-6">
          <CommentSection videoId={currentVideo.id} comments={videoComments} onAddComment={addComment} onLikeComment={likeComment} onDislikeComment={dislikeComment} />
        </div>

        {/* 上传模态框 */}
        <UploadModal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} onUpload={handleUpload} />
      </div>
    </div>;
}