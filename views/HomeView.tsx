
import React from 'react';
import { View } from '../types';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const tiles = [
    { title: 'コース一覧', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop', view: View.COURSE_SELECTION },
    { title: '受講生管理', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', view: View.STUDENT_LIST },
    { title: 'スキルチェック', img: 'https://images.unsplash.com/photo-1434031211128-095490e7e743?q=80&w=2070&auto=format&fit=crop', view: View.HOME },
    { title: 'メッセージ', img: 'https://images.unsplash.com/photo-1512428559083-a401c338e45e?q=80&w=2070&auto=format&fit=crop', view: View.HOME },
  ];

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-5 flex items-center justify-between sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-pink-50">
        <div className="flex items-center gap-3">
          <div className="p-0.5 rounded-full bg-gradient-to-tr from-primary to-accent-peach">
             <img src="https://i.pravatar.cc/150?u=instructor" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
          </div>
          <h1 className="text-base font-bold text-text-soft">田中 さくら 講師</h1>
        </div>
        <div className="relative w-10 h-10 flex items-center justify-center bg-pink-50 rounded-full">
          <span className="material-symbols-outlined text-primary text-xl">notifications</span>
          <span className="absolute top-2 right-2 bg-primary text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">2</span>
        </div>
      </header>
      
      <main className="flex-1 px-5 overflow-y-auto no-scrollbar pb-24 pt-4">
        {/* 検索バー */}
        <div className="mb-6 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">search</span>
          <input 
            type="text" 
            placeholder="受講生やコースを検索" 
            className="w-full h-12 bg-white border border-pink-100 rounded-2xl pl-12 pr-4 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all placeholder:text-pink-200"
            onClick={() => onNavigate(View.STUDENT_LIST)}
          />
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xl shadow-pink-200/20 mb-8 border border-white">
          <div className="flex items-center gap-2 mb-3">
             <span className="material-symbols-outlined text-primary text-lg">event_note</span>
             <h2 className="text-sm font-bold text-text-soft">本日のスケジュール</h2>
          </div>
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium text-text-soft/70">13:00〜 Webデザイン基礎</p>
              <p className="text-xs font-medium text-text-soft/70">未確認メッセージ: 3件</p>
            </div>
            <button className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              すべて表示
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((tile, idx) => (
            <button 
              key={idx} 
              onClick={() => onNavigate(tile.view)}
              className="group flex flex-col gap-2.5 text-left active:scale-[0.96] transition-all"
            >
              <div 
                className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-lg shadow-pink-100/50 border-2 border-white overflow-hidden relative"
                style={{ backgroundImage: `url(${tile.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <p className="font-bold text-xs px-1 text-text-soft/80 group-hover:text-primary transition-colors">{tile.title}</p>
            </button>
          ))}
        </div>
      </main>
      
      <nav className="absolute bottom-6 left-5 right-5 h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-pink-200/50 border border-white flex justify-around items-center px-4">
        <button className="flex flex-col items-center gap-0.5 text-primary">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[9px] font-bold">ホーム</span>
        </button>
        <button 
          onClick={() => onNavigate(View.STUDENT_LIST)}
          className="flex flex-col items-center gap-0.5 text-text-soft/40 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">person_search</span>
          <span className="text-[9px] font-bold">受講生</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-text-soft/40 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-2xl">favorite</span>
          <span className="text-[9px] font-bold">お気に入り</span>
        </button>
        <button className="flex flex-col items-center gap-0.5 text-text-soft/40 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-2xl">settings</span>
          <span className="text-[9px] font-bold">マイ設定</span>
        </button>
      </nav>
    </div>
  );
};

export default HomeView;
