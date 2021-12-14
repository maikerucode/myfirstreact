import logo from './logo.svg';
import './App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';
import Employee from './Employee';
import hello from './hello';

/*
functional/stateless component
- has no state; most simplest component; made for simple logic and program
- all in js are objects

class/statefull component
-

jsx = java script xml/ html object(?)

 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://pbs.twimg.com/media/FC3wflaaIAA5KnT?format=jpg&name=4096x4096"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p>{hello()}</p>
        <Employee/>
        <Greet name="Sir Sir Japeth">
        <Message/>
        </Greet>
        <Greet name="Tony Hawk">
        <Button/>
        <p>Spectacular React App</p>
        </Greet>
        <Greet name="Deploy Bugoy Drilon"></Greet>
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
  );
}

export default App;
