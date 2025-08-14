// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
export function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  onClick
}) {
  return <div onClick={onClick} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300", color)} />
          
          <div className="relative p-6">
            <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center mb-4", color)}>
              <Icon size={24} className="text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {title}
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {description}
            </p>
            
            <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
              开始使用
              <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>;
}