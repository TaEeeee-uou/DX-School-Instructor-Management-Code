
import React from 'react';

interface CourseSelectionViewProps {
  onBack: () => void;
  onSelectSubject: () => void;
}

const CourseSelectionView: React.FC<CourseSelectionViewProps> = ({ onBack, onSelectSubject }) => {
  const subjects = [
    { id: 'it', name: 'IT・Web', desc: 'プログラミング、デザイン基礎等', icon: 'terminal', color: 'bg-rose-100 text-rose-500' },
    { id: 'finance', name: 'ライフプラン', desc: '会計知識、資産運用等', icon: 'favorite', color: 'bg-orange-100 text-orange-500' },
    { id: 'design', name: 'クリエイティブ', desc: 'UI/UX、SNSデザイン等', icon: 'auto_fix_high', color: 'bg-pink-100 text-pink-500' },
    { id: 'labor', name: 'キャリア・労務', desc: '働き方、セルフマネジメント等', icon: 'self_improvement', color: 'bg-purple-100 text-purple-500' },
  ];

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-4 flex items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-pink-50">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-sm font-bold flex-1 text-center pr-10 text-text-soft">コース選択</h1>
      </header>
      
      <main className="flex-1 px-5 overflow-y-auto no-scrollbar pb-8 pt-6">
        <div className="mb-8">
          <p className="text-[10px] font-black text-primary/60 tracking-widest uppercase mb-2 ml-1">Current Course</p>
          <div className="relative">
            <select className="w-full h-14 bg-white border border-pink-100 rounded-2xl px-5 appearance-none font-bold text-text-soft shadow-sm focus:ring-4 focus:ring-primary/5 outline-none">
              <option>DX基礎・デザインコース</option>
              <option>マネージャー養成コース</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">expand_more</span>
          </div>
        </div>
        
        <p className="text-[10px] font-black text-primary/60 tracking-widest uppercase mb-4 ml-1">Select Subject</p>
        <div className="space-y-4">
          {subjects.map((sub) => (
            <button 
              key={sub.id} 
              onClick={onSelectSubject}
              className="w-full flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-pink-50 hover:shadow-md hover:shadow-pink-100/50 transition-all group active:scale-[0.98]"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${sub.color}`}>
                <span className="material-symbols-outlined text-3xl">{sub.icon}</span>
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-sm text-text-soft">{sub.name}</p>
                <p className="text-[10px] text-text-soft/50 font-medium">{sub.desc}</p>
              </div>
              <span className="material-symbols-outlined text-primary/20 group-hover:text-primary transition-colors">chevron_right</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseSelectionView;
