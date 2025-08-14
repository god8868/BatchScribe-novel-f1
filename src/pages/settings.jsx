// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Settings, User, Bell, Palette, Shield, Globe, Moon, Sun, Download, LogOut } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Switch, Input, Textarea } from '@/components/ui';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    profile: {
      name: 'AI创作者',
      email: 'creator@ai.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      bio: 'AI技术爱好者，专注于创作和分享'
    },
    notifications: {
      email: true,
      push: true,
      marketing: false,
      updates: true
    },
    appearance: {
      theme: 'light',
      language: 'zh-CN',
      fontSize: 'medium'
    },
    privacy: {
      profileVisible: true,
      activityVisible: true,
      dataCollection: false
    }
  });
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [{
    id: 'profile',
    label: '个人资料',
    icon: User
  }, {
    id: 'notifications',
    label: '通知设置',
    icon: Bell
  }, {
    id: 'appearance',
    label: '外观设置',
    icon: Palette
  }, {
    id: 'privacy',
    label: '隐私安全',
    icon: Shield
  }, {
    id: 'general',
    label: '通用设置',
    icon: Globe
  }];
  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };
  const handleProfileUpdate = (field, value) => {
    setSettings(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent mb-2">
            设置中心
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            个性化你的AI创作体验
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="space-y-2">
                  {tabs.map(tab => {
                  const Icon = tab.icon;
                  return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700'}`}>
                        <Icon size={18} />
                        <span>{tab.label}</span>
                      </button>;
                })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Profile Settings */}
                {activeTab === 'profile' && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">个人资料</h3>
                    
                    <div className="flex items-center space-x-4">
                      <img src={settings.profile.avatar} alt="Profile" className="w-20 h-20 rounded-full" />
                      <div>
                        <Button variant="outline" size="sm">更换头像</Button>
                        <p className="text-xs text-slate-500 mt-1">支持 JPG, PNG, GIF 格式</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">用户名</label>
                        <Input value={settings.profile.name} onChange={e => handleProfileUpdate('name', e.target.value)} placeholder="输入用户名" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">邮箱</label>
                        <Input type="email" value={settings.profile.email} onChange={e => handleProfileUpdate('email', e.target.value)} placeholder="输入邮箱地址" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">个人简介</label>
                        <Textarea value={settings.profile.bio} onChange={e => handleProfileUpdate('bio', e.target.value)} placeholder="介绍一下自己..." rows={3} />
                      </div>
                    </div>
                  </div>}

                {/* Notification Settings */}
                {activeTab === 'notifications' && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">通知设置</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">邮件通知</p>
                          <p className="text-sm text-slate-500">接收重要更新和提醒</p>
                        </div>
                        <Switch checked={settings.notifications.email} onCheckedChange={checked => handleSettingChange('notifications', 'email', checked)} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">推送通知</p>
                          <p className="text-sm text-slate-500">接收实时消息和提醒</p>
                        </div>
                        <Switch checked={settings.notifications.push} onCheckedChange={checked => handleSettingChange('notifications', 'push', checked)} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">营销邮件</p>
                          <p className="text-sm text-slate-500">接收产品更新和优惠信息</p>
                        </div>
                        <Switch checked={settings.notifications.marketing} onCheckedChange={checked => handleSettingChange('notifications', 'marketing', checked)} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">系统更新</p>
                          <p className="text-sm text-slate-500">接收系统更新通知</p>
                        </div>
                        <Switch checked={settings.notifications.updates} onCheckedChange={checked => handleSettingChange('notifications', 'updates', checked)} />
                      </div>
                    </div>
                  </div>}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">外观设置</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">主题</label>
                        <div className="flex space-x-4">
                          <button onClick={() => handleSettingChange('appearance', 'theme', 'light')} className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${settings.appearance.theme === 'light' ? 'border-slate-900 bg-slate-100' : 'border-slate-300'}`}>
                            <Sun size={16} />
                            <span>浅色</span>
                          </button>
                          <button onClick={() => handleSettingChange('appearance', 'theme', 'dark')} className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${settings.appearance.theme === 'dark' ? 'border-slate-900 bg-slate-100' : 'border-slate-300'}`}>
                            <Moon size={16} />
                            <span>深色</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">语言</label>
                        <select value={settings.appearance.language} onChange={e => handleSettingChange('appearance', 'language', e.target.value)} className="w-full p-2 border rounded-lg">
                          <option value="zh-CN">简体中文</option>
                          <option value="en-US">English</option>
                          <option value="ja-JP">日本語</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">字体大小</label>
                        <select value={settings.appearance.fontSize} onChange={e => handleSettingChange('appearance', 'fontSize', e.target.value)} className="w-full p-2 border rounded-lg">
                          <option value="small">小</option>
                          <option value="medium">中</option>
                          <option value="large">大</option>
                        </select>
                      </div>
                    </div>
                  </div>}

                {/* Privacy Settings */}
                {activeTab === 'privacy' && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">隐私安全</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">公开个人资料</p>
                          <p className="text-sm text-slate-500">允许其他用户查看你的个人资料</p>
                        </div>
                        <Switch checked={settings.privacy.profileVisible} onCheckedChange={checked => handleSettingChange('privacy', 'profileVisible', checked)} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">公开活动记录</p>
                          <p className="text-sm text-slate-500">允许其他用户查看你的创作活动</p>
                        </div>
                        <Switch checked={settings.privacy.activityVisible} onCheckedChange={checked => handleSettingChange('privacy', 'activityVisible', checked)} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">数据收集</p>
                          <p className="text-sm text-slate-500">允许收集使用数据以改善服务</p>
                        </div>
                        <Switch checked={settings.privacy.dataCollection} onCheckedChange={checked => handleSettingChange('privacy', 'dataCollection', checked)} />
                      </div>
                    </div>
                  </div>}

                {/* General Settings */}
                {activeTab === 'general' && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">通用设置</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">数据导出</label>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download size={16} />
                          <span>导出所有数据</span>
                        </Button>
                        <p className="text-sm text-slate-500 mt-1">导出你的所有创作和设置</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">账户操作</label>
                        <Button variant="destructive" className="flex items-center space-x-2">
                          <LogOut size={16} />
                          <span>退出登录</span>
                        </Button>
                      </div>
                    </div>
                  </div>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}