import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className="bg-azul-sereno text-white p-4">
        <h1 className="text-2xl">SmartClinica</h1>
      </header>
      <main className="p-4">
        <h2 className="text-xl text-verde-esperanca">Bem-vindo ao SmartClinica</h2>
        <p className="text-cinza-claro">Gerencie suas consultas com a ajuda da Nora!</p>
      </main>
    </div>
  )
}

export default App