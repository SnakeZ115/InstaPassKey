import { Lock, History, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-4 bg-background-light dark:bg-background-dark">

      <div className="flex items-center gap-2 text-primary">
        <Lock size={24} strokeWidth={2.5} />
        <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
          InstaPasskey
        </h2>
      </div>

      <div className="flex gap-2">
        <button 
          title="Historial"
          className="flex items-center justify-center rounded-lg h-9 w-9 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
        >
          <History size={20} />
        </button>
        
        <button 
          title="Configuración"
          className="flex items-center justify-center rounded-lg h-9 w-9 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};