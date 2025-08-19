// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowLeft } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export function BackButton({
  onClick
}) {
  return <Button onClick={onClick} variant="ghost" className="mb-4 text-slate-300 hover:text-white hover:bg-slate-800">
      <ArrowLeft className="h-4 w-4 mr-2" />
      返回首页
    </Button>;
}