// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Code, Copy, Download, Play, Sparkles, FileCode, Settings } from 'lucide-react';
// @ts-ignore;
import { Button, Card, CardContent, Textarea, Input } from '@/components/ui';

export default function CodingPage() {
  const [prompt, setPrompt] = useState('创建一个React组件，实现待办事项列表功能');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [framework, setFramework] = useState('react');
  const [isGenerating, setIsGenerating] = useState(false);
  const languages = ['JavaScript', 'Python', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'PHP'];
  const frameworks = ['React', 'Vue', 'Angular', 'Django', 'Flask', 'Spring', 'Express', 'Next.js'];
  const mockSnippets = [{
    id: 1,
    title: 'React Todo List',
    language: 'JavaScript',
    framework: 'React',
    description: '功能完整的待办事项组件',
    code: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-container">
      <h2>待办事项列表</h2>
      <div className="input-group">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加新任务..."
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">添加</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
    likes: 892,
    isLiked: false
  }, {
    id: 2,
    title: 'Python API Server',
    language: 'Python',
    framework: 'Flask',
    description: '简单的RESTful API服务',
    code: `from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 示例数据
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({
        "success": True,
        "data": users,
        "count": len(users)
    })

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify({"success": True, "data": user})
    return jsonify({"success": False, "message": "User not found"}), 404

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = {
        "id": len(users) + 1,
        "name": data.get("name"),
        "email": data.get("email"),
        "created_at": "2024-01-01"
    }
    users.append(new_user)
    return jsonify({"success": True, "data": new_user}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
    likes: 567,
    isLiked: true
  }];
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const mockCode = `// 根据您的要求生成的代码
// 功能：${prompt}

import React, { useState, useEffect } from 'react';

function GeneratedComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 组件初始化逻辑
    console.log('Component mounted successfully');
  }, []);

  const handleAction = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // 实现主要功能逻辑
      console.log('Executing action...');
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData([{ id: 1, message: '操作成功' }]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generated-component">
      <h2>Generated Component</h2>
      <p>根据您的需求生成的React组件</p>
      
      <button 
        onClick={handleAction}
        disabled={loading}
        className="action-button"
      >
        {loading ? '处理中...' : '执行操作'}
      </button>
      
      {error && <p className="error">{error}</p>}
      
      <div className="data-display">
        {data.map(item => (
          <div key={item.id}>{item.message}</div>
        ))}
      </div>
    </div>
  );
}

export default GeneratedComponent;`;
      setCode(mockCode);
      setIsGenerating(false);
    }, 3000);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };
  const handleDownload = () => {
    const blob = new Blob([code], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-code.${language.toLowerCase()}`;
    a.click();
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent mb-2">
            AI编码助手
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            智能代码生成，提升开发效率
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Creation Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  代码生成设置
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">功能描述</label>
                  <Textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="描述你想要实现的功能..." className="min-h-[100px] bg-slate-50 dark:bg-slate-700" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">编程语言</label>
                  <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {languages.map(lang => <option key={lang} value={lang.toLowerCase()}>{lang}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">框架/技术栈</label>
                  <select value={framework} onChange={e => setFramework(e.target.value)} className="w-full p-2 rounded-md bg-slate-50 dark:bg-slate-700 border">
                    {frameworks.map(fw => <option key={fw} value={fw.toLowerCase()}>{fw}</option>)}
                  </select>
                </div>

                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600">
                  {isGenerating ? <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      生成中...
                    </> : <>
                      <Code className="mr-2 h-4 w-4" />
                      生成代码
                    </>}
                </Button>
              </CardContent>
            </Card>

            {/* Code Snippets */}
            <Card className="mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileCode className="mr-2 h-4 w-4" />
                  热门代码片段
                </h3>
                <div className="space-y-3">
                  {mockSnippets.map(snippet => <div key={snippet.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
                      <h4 className="font-medium text-sm">{snippet.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {snippet.language} • {snippet.framework}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-500">{snippet.likes} likes</span>
                        <Button size="sm" variant="ghost">查看</Button>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Editor */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">生成的代码</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCopy} disabled={!code}>
                      <Copy className="h-4 w-4 mr-1" />
                      复制
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload} disabled={!code}>
                      <Download className="h-4 w-4 mr-1" />
                      下载
                    </Button>
                    <Button variant="outline" size="sm" disabled={!code}>
                      <Play className="h-4 w-4 mr-1" />
                      运行
                    </Button>
                  </div>
                </div>
                
                <Textarea value={code} onChange={e => setCode(e.target.value)} placeholder="生成的代码将在这里显示..." className="min-h-[500px] bg-slate-900 text-green-400 font-mono text-sm" spellCheck="false" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}