import Dictionary from "./Dictionary"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <h1 className="app-logo fw-bold">Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer-links text-center mt-3">
        <small>Coded by Kate Kim. </small> 
        <small>Go to <a href="https://github.com/projectkatk/dictionary-app" target="_blank" rel="noreferrer">Github</a></small>
      </footer>     
    </div>
  );
}

export default App;
