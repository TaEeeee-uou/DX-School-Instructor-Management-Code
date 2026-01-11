
import React from 'react';

interface CheckResultConfirmViewProps {
  onBack: () => void;
  onConfirm: () => void;
}

const CheckResultConfirmView: React.FC<CheckResultConfirmViewProps> = ({ onBack, onConfirm }) => {
  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-4 flex items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-pink-50">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-sm font-bold flex-1 text-center pr-10 text-text-soft">判定結果の確認</h1>
      </header>
      
      <main className="flex-1 overflow-y-auto no-scrollbar pb-44">
        <div className="p-5">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-pink-100/50 border border-white space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
            <h2 className="text-xl font-black text-text-soft">山田 太郎 <span className="text-xs font-normal opacity-40 ml-1">様</span></h2>
            <div className="space-y-3 pt-4 border-t border-pink-50 relative z-10">
              <div className="flex items-center gap-3 text-xs text-text-soft/60">
                <span className="material-symbols-outlined text-primary text-base">face</span>
                <p>担当講師: 鈴木 一郎</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-text-soft/60">
                <span className="material-symbols-outlined text-primary text-base">calendar_month</span>
                <p>評価実施日: 2023.10.27</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8 mt-4">
          <section>
            <p className="px-6 text-[10px] font-black text-primary tracking-widest uppercase mb-3">Evaluation Details</p>
            <div className="mx-5 bg-white rounded-2xl border border-pink-50 shadow-sm divide-y divide-pink-50 overflow-hidden">
              {[
                { label: 'タイポグラフィ', grade: 'A' },
                { label: 'カラーセオリー', grade: 'B+' },
                { label: 'レイアウト構成', grade: 'A' },
                { label: 'プロトタイピング', grade: 'C' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex justify-between items-center">
                  <p className="text-sm font-bold text-text-soft/70">{item.label}</p>
                  <span className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-primary font-black text-xs border border-pink-100">{item.grade}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section>
             <p className="px-6 text-[10px] font-black text-primary tracking-widest uppercase mb-3">Instructor's Comment</p>
            <div className="mx-5 p-6 bg-white rounded-2xl border border-pink-50 shadow-sm relative">
              <span className="material-symbols-outlined absolute -top-3 -left-1 text-primary/20 text-4xl">format_quote</span>
              <p className="text-sm leading-relaxed text-text-soft/80 font-medium italic">
                デザインの基礎概念は非常に良く理解できています。特に色彩感覚が素晴らしく、ターゲットに合わせた配色を論理的に説明できていました。今後はより複雑なインタラクションの実装にチャレンジしてみましょう。
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-pink-50 space-y-3">
        <button 
          onClick={onConfirm}
          className="w-full h-14 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-2xl shadow-xl shadow-pink-200/60 active:scale-[0.98] transition-all"
        >
          この内容で確定・送信
        </button>
        <button 
          onClick={onBack}
          className="w-full h-12 text-primary/60 text-xs font-bold hover:text-primary transition-colors"
        >
          内容を修正する
        </button>
      </footer>
    </div>
  );
};

export default CheckResultConfirmView;
