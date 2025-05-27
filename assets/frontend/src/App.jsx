import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResposta('');

    try {
      const response = await fetch('http://localhost:3000/triagens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, sintomas, urgencia: 'Aguarde análise' }),
      });
      const data = await response.json();
      setResposta(data.respostaIA || 'Erro ao processar triagem.');
    } catch (error) {
      setResposta('Erro ao conectar ao backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1A1A1A] min-h-screen text-[#E0F7FA] font-sans">
      <header className="bg-gradient-to-b from-[#1A1A1A] to-[#4A90E2] p-6 shadow-[0_0_10px_#4A90E2]">
        <h1 className="text-4xl font-bold text-[#E0F7FA] shadow-[0_0_10px_#4A90E2]">
          SmartClínica - Nora
        </h1>
        <p className="text-[#D3D3D3] text-lg">Seu Assistente Inteligente</p>
      </header>
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-[#E0F7FA] mb-6">Triagem com Nora</h2>
        <form onSubmit={handleSubmit} className="bg-[#2E2E2E] p-6 rounded-xl shadow-[0_0_15px_#4A90E2]">
          <div className="mb-4">
            <label className="block text-[#E0F7FA] mb-2">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#4A90E2] p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#E0F7FA] mb-2">Sintomas</label>
            <textarea
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#4A90E2] p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#4A90E2] text-[#E0F7FA] px-4 py-2 rounded hover:bg-[#50C878] transition"
            disabled={loading}
          >
            {loading ? 'Processando...' : 'Enviar'}
          </button>
        </form>
        {resposta && (
          <div className="mt-6 bg-[#2E2E2E] p-4 rounded-xl shadow-[0_0_15px_#50C878]">
            <h3 className="text-xl font-bold text-[#E0F7FA]">Resposta da Nora</h3>
            <p className="text-[#50C878]">{resposta}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;