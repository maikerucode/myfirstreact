import logo from './logo.svg';
import './App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';
import Employee from './Employee';
import hello from './hello';
import NavBar from './NavBar';

/*
functional/stateless component
- has no state; most simplest component; made for simple logic and program
- all in js are objects

class/statefull component
-

jsx = java script xml/ html object(?)

 */

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={"https://pbs.twimg.com/media/FC3wflaaIAA5KnT?format=jpg&name=4096x4096"} className="App-logo" alt="logo" />

        <p>Spectacular React App</p>

      </header>
    </div>
  );
}

export default Home;
