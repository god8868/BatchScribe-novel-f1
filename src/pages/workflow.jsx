// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Bot, Zap, Settings, Share2, Play, Plus, Trash2, Sparkles } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Input, Textarea } from '@/components/ui';

export default function WorkflowPage() {
  const [workflows, setWorkflows] = useState([{
    id: 1,
    name: '内容创作助手',
    description: '自动生成文章、配图和社交媒体内容',
    nodes: [{
      id: 1,
      type: 'input',
      label: '主题输入',
      position: {
        x: 50,
        y: 50
      }
    }, {
      id: 2,
      type: 'ai',
      label: 'AI写作',
      position: {
        x: 200,
        y: 50
      }
    }, {
      id: 3,
      type: 'ai',
      label: 'AI配图',
      position: {
        x: 350,
        y: 50
      }
    }, {
      id: 4,
      type: 'output',
      label: '发布内容',
      position: {
        x: 500,
        y: 50
      }
    }],
    isActive: true,
    runs: 234
  }, {
    id: 2,
    name: '智能客服',
    description: '自动回复客户咨询，智能分类和转接',
    nodes: [{
      id: 1,
      type: 'input',
      label: '客户消息',
      position: {
        x: 50,
        y: 50
      }
    }, {
      id: 2,
      type: 'ai',
      label: '意图识别',
      position: {
        x: 200,
        y: 50
      }
    }, {
      id: 3,
      type: 'ai',
      label: '智能回复',
      position: {
        x: 350,
        y: 50
      }
    }, {
      id: 4,
      type: 'output',
      label: '发送回复',
      position: {
        x: 500,
        y: 50
      }
    }],
    isActive: false,
    runs: 567
  }]);
  const [newWorkflow, setNewWorkflow] = useState({
    name: '',
    description: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const templates = [{
    id: 1,
    name: '内容创作',
    description: 'AI写作 + AI配图 + 社交媒体发布',
    icon: '✍️'
  }, {
    id: 2,
    name: '数据分析',
    description: '数据收集 + AI分析 + 报告生成',
    icon: '📊'
  }, {
    id: 3,
    name: '客户服务',
    description: '消息接收 + 智能回复 + 工单处理',
    icon: '💬'
  }, {
    id: 4,
    name: '营销自动化',
    description: '用户行为 + 个性化推荐 + 邮件发送',
    icon: '📧'
  }];
  const handleCreateWorkflow = async () => {
    if (!newWorkflow.name.trim()) return;
    setIsCreating(true);
    setTimeout(() => {
      const workflow = {
        id: Date.now(),
        name: newWorkflow.name,
        description: newWorkflow.description,
        nodes: [{
          id: 1,
          type: 'input',
          label: '输入',
          position: {
            x: 50,
            y: 50
          }
        }, {
          id: 2,
          type: 'ai',
          label: 'AI处理',
          position: {
            x: 200,
            y: 50
          }
        }, {
          id: 3,
          type: 'output',
          label: '输出',
          position: {
            x: 350,
            y: 50
          }
        }],
        isActive: false,
        runs: 0
      };
      setWorkflows(prev => [workflow, ...prev]);
      setNewWorkflow({
        name: '',
        description: ''
      });
      setIsCreating(false);
    }, 1500);
  };
  const toggleWorkflow = id => {
    setWorkflows(prev => prev.map(wf => wf.id === id ? {
      ...wf,
      isActive: !wf.isActive
    } : wf));
  };
  const deleteWorkflow = id => {
    setWorkflows(prev => prev.filter(wf => wf.id !== id));
  };
  return <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
            智能体/工作流
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            创建自定义AI工作流，自动化你的任务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Creation Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  创建工作流
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">工作流名称</label>
                  <Input value={newWorkflow.name} onChange={e => setNewWorkflow({
                  ...newWorkflow,
                  name: e.target.value
                })} placeholder="例如：内容创作助手" className="bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">描述</label>
                  <Textarea value={newWorkflow.description} onChange={e => setNewWorkflow({
                  ...newWorkflow,
                  description: e.target.value
                })} placeholder="描述工作流的功能..." className="min-h-[80px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <Button onClick={handleCreateWorkflow} disabled={isCreating} className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
                  {isCreating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      创建中...
                    </> : <>
                      <Plus className="mr-2 h-4 w-4" />
                      创建工作流
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Zap className="mr-2 h-4 w-4" />
                  快速模板
                </h3>
                <div className="space-y-3">
                  {templates.map(template => <div key={template.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{template.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{template.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{template.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Workflow List */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">我的工作流</h3>
                
                <div className="space-y-4">
                  {workflows.map(workflow => <Card key={workflow.id} className="group">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{workflow.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{workflow.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="flex items-center">
                                <Play size={14} className="mr-1" />
                                {workflow.runs} 次运行
                              </span>
                              <span className={`px-2 py-1 rounded text-xs ${workflow.isActive ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'}`}>
                                {workflow.isActive ? '运行中' : '已停止'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant={workflow.isActive ? "destructive" : "default"} onClick={() => toggleWorkflow(workflow.id)}>
                              {workflow.isActive ? '停止' : '启动'}
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Settings size={16} />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => deleteWorkflow(workflow.id)}>
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>

                        {/* Workflow Visualization */}
                        <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <div className="flex items-center space-x-2 overflow-x-auto">
                            {workflow.nodes.map((node, index) => <div key={node.id} className="flex items-center">
                                <div className={`px-3 py-2 rounded-lg text-xs font-medium ${node.type === 'input' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : node.type === 'ai' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                                  {node.label}
                                </div>
                                {index < workflow.nodes.length - 1 && <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2" />}
                              </div>)}
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