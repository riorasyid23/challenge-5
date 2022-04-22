// import logo from './logo.svg';
// import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import './Bootstrap.min.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Input />
      <Card />
    </div>
  );
}

export default App;
