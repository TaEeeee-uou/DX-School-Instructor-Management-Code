
import React, { useState } from 'react';
import { SkillSection } from '../types';

interface SkillCheckSheetViewProps {
  onBack: () => void;
  onSave: () => void;
}

const SkillCheckSheetView: React.FC<SkillCheckSheetViewProps> = ({ onBack, onSave }) => {
  const [sections, setSections] = useState<SkillSection[]>([
    {
      title: 'UI/UX基礎',
      items: [
        { id: '1', name: 'カラーパレットの作成', status: 'ACHIEVED' },
        { id: '2', name: 'タイポグラフィの選定', status: 'PARTIAL' },
        { id: '3', name: 'アイコン素材の作成', status: 'UNACHIEVED' },
      ]
    },
    {
      title: 'ツール活用',
      items: [
        { id: '4', name: 'Figma Auto Layout', status: 'NONE' },
        { id: '5', name: 'コンポーネント変数の理解', status: 'NONE' },
      ]
    }
  ]);

  const updateStatus = (sectionIdx: number, itemIdx: number, status: any) => {
    const newSections = [...sections];
    newSections[sectionIdx].items[itemIdx].status = status;
    setSections(newSections);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACHIEVED': return 'bg-rose-400';
      case 'PARTIAL': return 'bg-amber-300';
      case 'UNACHIEVED': return 'bg-pink-200';
      default: return 'bg-slate-200';
    }
  };

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-4 flex items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-pink-50">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-sm font-bold flex-1 text-center pr-10 text-text-soft">スキル判定シート</h1>
      </header>
      
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="p-6 bg-white border-b border-pink-50 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1.5 h-6 bg-primary rounded-full"></div>
             <h2 className="text-lg font-bold text-text-soft">デザイン実務評価</h2>
          </div>
          <div className="flex justify-between items-baseline mb-3">
            <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Progress</p>
            <p className="text-2xl font-black text-primary">65<span className="text-sm font-bold ml-0.5">%</span></p>
          </div>
          <div className="h-2.5 w-full bg-pink-50 rounded-full overflow-hidden border border-pink-100">
            <div className="h-full bg-gradient-to-r from-primary to-rose-400" style={{ width: '65%' }}></div>
          </div>
        </div>
        
        {sections.map((section, sIdx) => (
          <div key={section.title} className="mt-4">
            <p className="px-6 py-2 text-[10px] font-black text-primary/60 tracking-widest uppercase">{section.title}</p>
            <div className="bg-white divide-y divide-pink-50 border-y border-pink-50">
              {section.items.map((item, iIdx) => (
                <div key={item.id} className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full shadow-inner ${getStatusColor(item.status)}`}></div>
                    <p className="font-bold text-sm text-text-soft">{item.name}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-pink-50/50 p-1 rounded-xl">
                    {[
                      { label: '未修得', val: 'UNACHIEVED' },
                      { label: '修得中', val: 'PARTIAL' },
                      { label: '修得済', val: 'ACHIEVED' }
                    ].map((opt) => (
                      <button 
                        key={opt.val}
                        onClick={() => updateStatus(sIdx, iIdx, opt.val)}
                        className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                          item.status === opt.val 
                            ? 'bg-white text-primary shadow-md shadow-pink-200/40 ring-1 ring-pink-100' 
                            : 'text-text-soft/40 hover:text-text-soft/60'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      
      <footer className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-pink-50">
        <button 
          onClick={onSave}
          className="w-full h-14 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-2xl shadow-xl shadow-pink-200/60 active:scale-[0.98] transition-all"
        >
          結果を保存する
        </button>
      </footer>
    </div>
  );
};

export default SkillCheckSheetView;
