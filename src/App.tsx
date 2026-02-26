import { useState } from 'react';
import { Header } from './components/Header';
import { PasswordDisplay } from './components/PasswordDisplay';
import { CustomizationPanel } from './components/CustomizationPanel';
import { SecurityCard } from './components/SecurityCard';
import { Footer } from './components/Footer';

function App() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(24);

  return (
    <div className="w-[380px] min-h-[520px] mx-auto overflow-hidden flex flex-col shadow-2xl bg-background-light dark:bg-background-dark font-display">
      <Header />
      <main className="flex-1 p-5 space-y-6">
        <PasswordDisplay value={password} onRefresh={() => console.log('Refrescar')} />
        <CustomizationPanel length={length} setLength={setLength} />
        <SecurityCard />
      </main>
      <Footer />
    </div>
  );
}

export default App