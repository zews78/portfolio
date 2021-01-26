import logo from './logo.svg';
import logo2 from './cancel.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Hey! this is Sharique Alam
        </p>
        <a
          className="App-link"
          href="https://github.com/zews78/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </header>
    </div>
  );
}

export default App;
