import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import robotImage from './assets/images/robot-ia.png'; // Ajuste o caminho conforme necessário

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      '.hero-button',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'bounce', delay: 0.6 }
    );
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out', delay: 0.8 }
    );
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SmartClínica</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-200 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-200 transition">Sobre</a></li>
            <li><a href="#" className="hover:text-blue-200 transition">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-white relative">
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4">
            SmartClínica: IA para a Saúde
          </h1>
          <p className="hero-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Um assistente médico virtual que capacita clínicas comunitárias com tecnologia de inteligência artificial.
          </p>
          <button className="hero-button bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
            Descubra Agora
          </button>
        </div>

        {/* Imagem do robô inclinada à esquerda */}
        <img
          src={robotImage}
          alt="Robô IA"
          className="hero-image absolute right-0 top 1/4 w-1/4 md:top-1/3 md:w-1/3 opacity-90 shadow-lg transition-transform duration-500 ease-in-out width-300 px-4"
          style={{ transform: 'rotate(-10deg)' }}
        />
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Por que escolher a SmartClínica?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Bot Médico</h3>
            <p className="text-gray-600">
              Assistente virtual com IA para orientar pacientes e profissionais em tempo real.
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Acesso Comunitário</h3>
            <p className="text-gray-600">
              Ferramentas para clínicas comunitárias, promovendo saúde acessível a todos.
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600">
              Integração com IA para diagnósticos precisos e gestão eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-6 text-center">
        <p>© 2025 SmartClínica. Todos os direitos reservados.</p>
        <p className="mt-2">Contato: contato@smartclinica.com</p>
      </footer>
    </div>
  );
}

export default App;
