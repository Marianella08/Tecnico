import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <a href="#">Cuenta</a>
          <a href="#">Transferencias</a>
          <a href="#">Sesión</a>
        </div>
      </header>
      <main>
        <div className='session'>
          <div className="title"><h3>Inicia sesión</h3></div>
          <div className="inputs">
            <input type="text" placeholder='Usuario' />
            <input type="text" placeholder='Contraseña'/>
          </div>
          <div className="button">
            <button>Enviar</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
