// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Database, Search, Plus, FileText, Folder, Tag, Clock, Star } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Input, Textarea } from '@/components/ui';

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [documents, setDocuments] = useState([{
    id: 1,
    title: 'AI技术入门指南',
    content: '人工智能基础知识，包括机器学习、深度学习、自然语言处理等核心概念...',
    category: '技术',
    tags: ['AI', '机器学习', '入门'],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    isStarred: true
  }, {
    id: 2,
    title: 'React开发最佳实践',
    content: 'React组件设计模式、状态管理、性能优化等开发经验和技巧...',
    category: '开发',
    tags: ['React', '前端', '最佳实践'],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    isStarred: false
  }, {
    id: 3,
    title: '项目管理方法论',
    content: '敏捷开发、Scrum、看板等现代项目管理方法的实践指南...',
    category: '管理',
    tags: ['项目管理', '敏捷', 'Scrum'],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    isStarred: true
  }]);
  const [newDoc, setNewDoc] = useState({
    title: '',
    content: '',
    category: 'general',
    tags: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const categories = ['all', '技术', '开发', '管理', '设计', '营销', '其他'];
  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleCreateDocument = async () => {
    if (!newDoc.title.trim()) return;
    setIsCreating(true);
    setTimeout(() => {
      const document = {
        id: Date.now(),
        title: newDoc.title,
        content: newDoc.content,
        category: newDoc.category,
        tags: newDoc.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        createdAt: new Date(),
        updatedAt: new Date(),
        isStarred: false
      };
      setDocuments(prev => [document, ...prev]);
      setNewDoc({
        title: '',
        content: '',
        category: 'general',
        tags: ''
      });
      setIsCreating(false);
    }, 1000);
  };
  const toggleStar = id => {
    setDocuments(prev => prev.map(doc => doc.id === id ? {
      ...doc,
      isStarred: !doc.isStarred
    } : doc));
  };
  const formatDate = date => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900 dark:via-yellow-900 dark:to-orange-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
            知识库
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            构建你的个人知识体系，智能问答与文档管理
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">分类</h3>
                <div className="space-y-2">
                  {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                      <span className="capitalize">{category}</span>
                      <span className="float-right text-sm text-slate-500">
                        {category === 'all' ? documents.length : documents.filter(doc => doc.category === category).length}
                      </span>
                    </button>)}
                </div>
              </CardContent>
            </Card>

            {/* Create Document */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  新建文档
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">标题</label>
                  <Input value={newDoc.title} onChange={e => setNewDoc({
                  ...newDoc,
                  title: e.target.value
                })} placeholder="文档标题" className="bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">内容</label>
                  <Textarea value={newDoc.content} onChange={e => setNewDoc({
                  ...newDoc,
                  content: e.target.value
                })} placeholder="文档内容..." className="min-h-[100px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">标签</label>
                  <Input value={newDoc.tags} onChange={e => setNewDoc({
                  ...newDoc,
                  tags: e.target.value
                })} placeholder="标签1, 标签2, 标签3" className="bg-slate-50 dark:bg-slate-700" />
                </div>

                <Button onClick={handleCreateDocument} disabled={isCreating} className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600">
                  {isCreating ? '创建中...' : '创建文档'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm mb-6">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="搜索知识库..." className="pl-10 bg-slate-50 dark:bg-slate-700" />
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <div className="space-y-4">
              {filteredDocs.map(doc => <Card key={doc.id} className="group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">{doc.content}</p>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 px-2 py-1 rounded">
                            {doc.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            {doc.tags.map(tag => <span key={tag} className="text-xs bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                                #{tag}
                              </span>)}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-3 text-sm text-slate-500">
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {formatDate(doc.updatedAt)}
                          </span>
                          <span className="flex items-center">
                            <Folder size={14} className="mr-1" />
                            {doc.category}
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" onClick={() => toggleStar(doc.id)}>
                        <Star size={16} className={doc.isStarred ? 'fill-yellow-500 text-yellow-500' : ''} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {filteredDocs.length === 0 && <div className="text-center py-12">
                <Database className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400">没有找到相关文档</p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}