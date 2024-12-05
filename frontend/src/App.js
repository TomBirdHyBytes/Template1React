import logo from './logo.svg';
import './App.css';


/* Clearly something funky is going on with the images */
function App() {
  return (
    <div className="Page">
      <header className="Header-Bar">
        <div className="Header-Div">
          <i src="./public/images/logo.png"></i>
          <span className="Header-Left"> Call : +01 123455678990 </span>
          <i src="./public/images/logo.png"></i>
          <span className="Header-Right"> Email : demo@gmail.com </span>
        </div>
      </header>
    </div>
    /* This is where I will hide if I panic
    <div className="App">
      <header className="App-header">
        <div className = "Header-Bar"> 
          <span> Call : +01 123455678990 </span>
          <span> Email : demo@gmail.com </span>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. I've changed this text.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
