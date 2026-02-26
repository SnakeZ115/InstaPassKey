import { ShieldCheck } from 'lucide-react';

export const SecurityCard = () => {
  return (
    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-500" size={18} />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Seguridad</span>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">Entropía: 128 bits</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 w-[85%] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
      </div>
      <div className="flex justify-between items-end text-xs">
        <p className="text-slate-500">Tiempo para hackear:</p>
        <p className="font-bold text-green-500 text-sm">400+ años</p>
      </div>
    </div>
  );
};