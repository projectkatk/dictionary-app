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
      <footer className="footer-links text-center">Coded by Kate Kim.</footer>     
    </div>
  );
}

export default App;
