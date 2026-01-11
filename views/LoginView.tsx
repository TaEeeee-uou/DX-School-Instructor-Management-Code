
import React from 'react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-pink-50">
      <header className="p-4 flex justify-center border-b border-pink-100">
        <h1 className="text-lg font-bold text-primary-dark">講師ログイン</h1>
      </header>
      
      <main className="flex-1 px-8 flex flex-col">
        <div className="flex justify-center py-12">
          <div className="flex items-center justify-center bg-white h-28 w-28 rounded-full shadow-xl shadow-pink-200/50 border-4 border-primary/20">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '52px' }}>auto_awesome</span>
          </div>
        </div>
        
        <h2 className="text-3xl font-extrabold text-center mb-1 text-primary-dark">DX School</h2>
        <p className="text-center text-xs text-primary mb-10 font-medium tracking-widest uppercase">Instructor Admin</p>
        
        <div className="space-y-5">
          <div>
            <p className="text-xs font-bold mb-2 ml-1 text-primary/80">ユーザー名</p>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full h-14 bg-white border border-pink-100 rounded-2xl px-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-pink-200"
            />
          </div>
          <div>
            <p className="text-xs font-bold mb-2 ml-1 text-primary/80">パスワード</p>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full h-14 bg-white border border-pink-100 rounded-2xl px-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-pink-200"
            />
          </div>
        </div>
        
        <button 
          onClick={onLogin}
          className="mt-10 w-full h-14 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark active:scale-[0.98] transition-all shadow-xl shadow-pink-300/40"
        >
          ログイン
        </button>
        
        <div className="mt-8 text-center">
          <a href="#" className="text-primary/60 text-xs font-medium hover:text-primary transition-colors">パスワードをお忘れの方はこちら</a>
        </div>
      </main>
    </div>
  );
};

export default LoginView;
