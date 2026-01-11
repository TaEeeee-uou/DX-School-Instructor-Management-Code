
import React from 'react';

interface StudentRegistrationViewProps {
  onBack: () => void;
  onRegister: () => void;
}

const StudentRegistrationView: React.FC<StudentRegistrationViewProps> = ({ onBack, onRegister }) => {
  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="p-4 flex items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-pink-50">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-sm font-bold flex-1 text-center pr-10 text-text-soft">受講生登録</h1>
      </header>
      
      <main className="flex-1 p-8 space-y-8">
        <div className="text-center pb-4">
          <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-lg shadow-pink-100">
            <span className="material-symbols-outlined text-primary text-4xl">person_add</span>
          </div>
          <p className="text-xs text-text-soft/60">新しい受講生の情報を入力してください</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-primary/60 tracking-widest uppercase mb-2 ml-1">Name</label>
            <input 
              type="text" 
              placeholder="お名前（例：山田 太郎）" 
              className="w-full h-14 bg-white border border-pink-100 rounded-2xl px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all placeholder:text-pink-100 text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-primary/60 tracking-widest uppercase mb-2 ml-1">Student ID</label>
            <input 
              type="text" 
              placeholder="受講生ID（半角英数字）" 
              className="w-full h-14 bg-white border border-pink-100 rounded-2xl px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all placeholder:text-pink-100 text-sm"
            />
          </div>
        </div>
      </main>
      
      <footer className="p-6 bg-white/90 backdrop-blur-md border-t border-pink-50">
        <button 
          onClick={onRegister}
          className="w-full h-14 bg-gradient-to-r from-primary to-rose-400 text-white font-bold rounded-2xl shadow-xl shadow-pink-200/60 active:scale-[0.98] transition-all"
        >
          この内容で登録する
        </button>
      </footer>
    </div>
  );
};

export default StudentRegistrationView;
