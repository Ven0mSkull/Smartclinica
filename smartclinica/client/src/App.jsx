import React from 'react';
import { motion } from 'framer-motion';
import robotImage from './assets/images/seilaa.png'; 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-white flex flex-col">
      {/* Menu */}
     <nav className="bg-cyan-700/500 backdrop-blur shadow-md fixed w-full top-0 z-20">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
       <span className="text-3xl font-extrabold text-cyan-700 tracking-tight drop-shadow-sm">
            SmartClínica
          </span>
          <ul className="flex space-x-8 font-medium text-cyan-700">
            <li><a href="#" className="hover:text-cyan-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-cyan-500 transition">Sobre</a></li>
            <li><a href="#" className="hover:text-cyan-500 transition">Contato</a></li>
          </ul>
        </div>
      </nav>



      {/*Porque escolhe a smartclinica*/}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-8">
        <div className="text-center text-cyan-900 bg-white/80 shadow-xl p-10 rounded-2xl z-10 relative max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            SmartClínica: <span className="text-cyan-600">IA para a Saúde</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Um assistente médico virtual que capacita clínicas comunitárias com tecnologia de inteligência artificial.
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg">
            Descubra Agora
          </button>
        </div>

        

        {/* Imagem do robô IA animada com efeito de bounce */}
        <motion.img
          src={robotImage}
          alt="Robô IA"
          className="IA-image absolute top-12 h-full object-contain md:w-2/2"
          style={{ maxHeight: '100%', maxWidth: '100%', right: '-500px' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", times: [0, 0.7, 1] }}
        />
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-14">
          Por que escolher a SmartClínica?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="feature-card bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition">
            <div className="bg-cyan-100 text-cyan-600 rounded-full p-4 mb-4 text-3xl shadow">
              <span role="img" aria-label="Bot">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Bot Médico</h3>
            <p className="text-gray-600 text-center">
              Assistente virtual com IA para orientar pacientes e profissionais em tempo real.
            </p>
          </div>
          <div className="feature-card bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition">
            <div className="bg-cyan-100 text-cyan-600 rounded-full p-4 mb-4 text-3xl shadow">
              <span role="img" aria-label="Comunidade">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Acesso Comunitário</h3>
            <p className="text-gray-600 text-center">
              Ferramentas para clínicas comunitárias, promovendo saúde acessível a todos.
            </p>
          </div>
          <div className="feature-card bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition">
            <div className="bg-cyan-100 text-cyan-600 rounded-full p-4 mb-4 text-3xl shadow">
              <span role="img" aria-label="Tecnologia">🧬</span>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Chat bot</h3>
            <p className="text-gray-600 text-center">
              Integração com IA para diagnósticos, sistema de tickets precisos e gestão eficiente de médicos.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-100 text-cyan-600 p-6 text-center px-4 mt-auto">
        <p>© 2025 SmartClínica. Todos os direitos reservados.</p>
        <p className="mt-2">Contato: <a href="mailto:contato@smartclinica.com" className="underline hover:text-black-200">contato@smartclinica.com</a></p>
      </footer>
    </div>
  );
}

export default App;