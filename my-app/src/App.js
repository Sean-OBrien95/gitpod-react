import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Mike" age="32" />
    </div>
  );
}

export default App;
