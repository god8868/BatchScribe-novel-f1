// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Search, ListMusic, Plus, Upload, X } from 'lucide-react';

// @ts-ignore;
import { Button, Card, CardContent } from './components/ui';

// @ts-ignore;
import { BackButton } from './components/BackButton';
import { MusicPlayer } from './components/MusicPlayer';
import { Playlist } from './components/Playlist';
import { SearchBar } from './components/SearchBar';
import { GenreFilter } from './components/GenreFilter';
import { PlaylistManager } from './components/PlaylistManager';
export default function MusicPage(props) {
  const {
    $w
  } = props;
  const navigateBack = $w.utils.navigateBack;
  const [songs] = useState([{
    id: 1,
    title: 'AI Dreams',
    artist: 'Neural Beats',
    duration: 245,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    liked: true,
    genre: 'Electronic'
  }, {
    id: 2,
    title: 'Digital Love',
    artist: 'Cyber Pulse',
    duration: 198,
    cover: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop',
    liked: false,
    genre: 'Pop'
  }, {
    id: 3,
    title: 'Neural Waves',
    artist: 'Synth Mind',
    duration: 312,
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop',
    liked: true,
    genre: 'Ambient'
  }, {
    id: 4,
    title: 'Future Funk',
    artist: 'AI Groove',
    duration: 267,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    liked: false,
    genre: 'Funk'
  }, {
    id: 5,
    title: 'Quantum Rhythm',
    artist: 'Data Flow',
    duration: 289,
    cover: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop',
    liked: true,
    genre: 'Techno'
  }, {
    id: 6,
    title: 'Neon Nights',
    artist: 'Pixel Sound',
    duration: 234,
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop',
    liked: false,
    genre: 'Synthwave'
  }, {
    id: 7,
    title: 'Code Symphony',
    artist: 'Algorithm',
    duration: 276,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    liked: true,
    genre: 'Classical'
  }, {
    id: 8,
    title: 'Virtual Reality',
    artist: 'Dream Machine',
    duration: 301,
    cover: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop',
    liked: false,
    genre: 'Ambient'
  }]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [likedSongs, setLikedSongs] = useState(songs.filter(s => s.liked).map(s => s.id));
  const [showPlaylistManager, setShowPlaylistManager] = useState(false);
  const [playlists, setPlaylists] = useState([{
    id: 1,
    name: '我的最爱',
    songs: [1, 3, 5, 7],
    createdAt: new Date('2024-01-01')
  }, {
    id: 2,
    name: '工作专注',
    songs: [2, 4, 6, 8],
    createdAt: new Date('2024-01-05')
  }, {
    id: 3,
    name: '运动节奏',
    songs: [1, 4, 5],
    createdAt: new Date('2024-01-10')
  }]);
  const genres = ['all', 'Electronic', 'Pop', 'Ambient', 'Funk', 'Techno', 'Synthwave', 'Classical'];
  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) || song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || song.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const toggleLike = songId => {
    setLikedSongs(prev => prev.includes(songId) ? prev.filter(id => id !== songId) : [...prev, songId]);
  };
  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };
  const prevSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };
  const createPlaylist = name => {
    if (!name.trim()) return;
    const newPlaylist = {
      id: Date.now(),
      name: name,
      songs: [],
      createdAt: new Date()
    };
    setPlaylists([newPlaylist, ...playlists]);
  };
  const updatePlaylist = (playlistId, newName) => {
    setPlaylists(playlists.map(p => p.id === playlistId ? {
      ...p,
      name: newName
    } : p));
  };
  const deletePlaylist = playlistId => {
    setPlaylists(playlists.filter(p => p.id !== playlistId));
  };
  const addSongsToPlaylist = (playlistId, songIds) => {
    setPlaylists(playlists.map(p => {
      if (p.id === playlistId) {
        const newSongs = [...new Set([...p.songs, ...songIds])];
        return {
          ...p,
          songs: newSongs
        };
      }
      return p;
    }));
  };
  const removeSongsFromPlaylist = (playlistId, songIds) => {
    setPlaylists(playlists.map(p => {
      if (p.id === playlistId) {
        return {
          ...p,
          songs: p.songs.filter(id => !songIds.includes(id))
        };
      }
      return p;
    }));
  };
  const reorderPlaylistSongs = (playlistId, fromIndex, toIndex) => {
    setPlaylists(playlists.map(p => {
      if (p.id === playlistId) {
        const newSongs = [...p.songs];
        const [removed] = newSongs.splice(fromIndex, 1);
        newSongs.splice(toIndex, 0, removed);
        return {
          ...p,
          songs: newSongs
        };
      }
      return p;
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        <BackButton onClick={navigateBack} />
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            AI音乐世界
          </h1>
          <p className="text-slate-300">
            探索AI创作的无限音乐可能
          </p>
        </div>

        {/* 控制栏 */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex gap-4">
            <GenreFilter value={selectedGenre} onChange={setSelectedGenre} genres={genres} />
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="搜索歌曲..." />
          </div>
          <Button onClick={() => setShowPlaylistManager(true)} className="bg-cyan-500 hover:bg-cyan-600">
            <ListMusic className="h-4 w-4 mr-2" />
            播放列表管理
          </Button>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Playlist songs={filteredSongs} currentSong={currentSong} onSongSelect={setCurrentSong} onLikeToggle={toggleLike} likedSongs={likedSongs} formatTime={formatTime} />
          
          <MusicPlayer currentSong={currentSong} isPlaying={isPlaying} currentTime={currentTime} volume={volume} onPlayToggle={togglePlay} onNext={nextSong} onPrev={prevSong} onVolumeChange={setVolume} onLikeToggle={toggleLike} formatTime={formatTime} />
        </div>

        {/* 播放列表管理模态框 */}
        {showPlaylistManager && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <Card className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-100">播放列表管理</h2>
                  <button onClick={() => setShowPlaylistManager(false)} className="p-2 text-slate-400 hover:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <PlaylistManager playlists={playlists} songs={songs} onCreatePlaylist={createPlaylist} onUpdatePlaylist={updatePlaylist} onDeletePlaylist={deletePlaylist} onAddSongsToPlaylist={addSongsToPlaylist} onRemoveSongsFromPlaylist={removeSongsFromPlaylist} onReorderPlaylistSongs={reorderPlaylistSongs} formatTime={formatTime} />
              </CardContent>
            </Card>
          </div>}
      </div>
    </div>;
}