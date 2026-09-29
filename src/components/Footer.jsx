import React from 'react';
import { Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-slate-100 bg-white py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
        <div className="flex items-center gap-3">
          <img src="/softlearn-logo.png" alt="SoftLearn" className="h-7 w-auto object-contain" />
          <span className="text-slate-300">|</span>
          <span className="text-xs sm:text-sm">Interactive live quizzes & competitions by SoftLearn</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>Fast, friendly & mobile-first</span>
        </div>
      </div>
    </footer>
  );
}
