
import React, { useState } from 'react';

interface StudentListViewProps {
  onBack: () => void;
  onSelectStudent: () => void;
}

const StudentListView: React.FC<StudentListViewProps> = ({ onBack, onSelectStudent }) => {
  const students = [
    { name: '佐藤 花子', id: 'DXS-01235', avatar: 'https://i.pravatar.cc/150?u=hanako' },
    { name: '山田 太郎', id: 'DXS-01234', avatar: 'https://i.pravatar.cc/150?u=taro' },
    { name: '高橋 美咲', id: 'DXS-01237', avatar: 'https://i.pravatar.cc/150?u=misaki' },
    { name: '渡辺 陽子', id: 'DXS-01239', avatar: 'https://i.pravatar.cc/150?u=yoko' },
    { name: '鈴木 一郎', id: 'DXS-01236', avatar: 'https://i.pravatar.cc/150?u=ichiro' },
    { name: '田中 健太', id: 'DXS-01238', avatar: 'https://i.pravatar.cc/150?u=kenta' },
  ];

  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-4 flex items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-pink-50">
        <button onClick={onBack} className="text-primary w-10 h-10 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-sm font-bold flex-1 text-center pr-10 text-text-soft">受講生リスト</h1>
      </header>
      
      <main className="flex-1 px-5 overflow-y-auto no-scrollbar pt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-text-soft mb-1">Students</h2>
          <p className="text-xs font-medium text-primary/60">対象の受講生を選択してください</p>
        </div>
        
        <div className="relative mb-8">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 text-xl">person_search</span>
          <input 
            type="text" 
            placeholder="Search by name or ID..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 bg-white border border-pink-100 rounded-2xl pl-12 pr-4 outline-none focus:ring-4 focus:ring-primary/5 shadow-sm placeholder:text-pink-100 text-sm"
          />
        </div>
        
        <div className="space-y-3 pb-24">
          {students.filter(s => s.name.includes(search) || s.id.includes(search)).map((s, idx) => (
            <button 
              key={idx} 
              onClick={onSelectStudent}
              className="w-full bg-white p-4 rounded-2xl flex items-center justify-between group active:scale-[0.98] transition-all border border-pink-50 shadow-sm hover:shadow-md hover:shadow-pink-100/50"
            >
              <div className="flex items-center gap-4">
                <img src={s.avatar} className="w-12 h-12 rounded-full border-2 border-pink-50" alt="" />
                <div className="text-left">
                  <p className="font-bold text-sm text-text-soft">{s.name}</p>
                  <p className="text-[10px] font-bold text-primary/40 uppercase tracking-tighter">{s.id}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <span className="material-symbols-outlined text-base">chevron_right</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentListView;
