interface Props {
  length: number;
  setLength: (val: number) => void;
}

export const CustomizationPanel = ({ length, setLength }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">Personalización</h3>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">Fuerte</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>Longitud</span>
          <span className="font-bold text-primary">{length} Caracteres</span>
        </div>
        <input 
          type="range" 
          min="8" max="64" 
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        {['Mayúsculas', 'Minúsculas', 'Números', 'Símbolos'].map((option) => (
          <div key={option} className="flex items-center justify-between">
            <span className="text-sm text-slate-700 dark:text-slate-300">{option}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};