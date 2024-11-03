import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greetings from './Greetings';
import SayHello from './SayHello';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Test</h1>

      <Welcome />
      <Greetings name='Britto' />

      <SayHello></SayHello>
    </div>
    
  );
}

export default App;
