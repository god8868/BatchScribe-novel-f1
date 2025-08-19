// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowRight } from 'lucide-react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';

export function NavigationCard({
  title,
  description,
  icon,
  color,
  onClick
}) {
  return <Card className={`bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer group`} onClick={onClick}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${color}`}>
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">{title}</h3>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
        </div>
      </CardContent>
    </Card>;
}