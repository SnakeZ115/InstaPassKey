import { useState } from 'react';
import { Copy, RefreshCw, Check } from 'lucide-react';

interface Props {
  value: string;
  onRefresh: () => void;
}

export const PasswordDisplay = ({ value, onRefresh }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Contraseña Generada
      </label>
      <div className="flex items-stretch rounded-xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <input 
          className="w-full bg-transparent border-none text-slate-900 dark:text-white px-4 py-4 text-lg font-mono tracking-wider focus:outline-none" 
          readOnly 
          type="text" 
          value={value}
        />
        <div className="flex items-center px-1 pr-2">
          <button 
            onClick={handleCopy}
            className="p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>
          <button 
            onClick={onRefresh}
            className="p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};