import logo from './logo.svg';
import './App.css';
import  Welcome from'./Welcome.js';
import StudentInfo from './StudentInfo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome></Welcome>
        <StudentInfo student_id='101416601' student_name='Jose Britto Saaji' college='George Brown College, Toronto'></StudentInfo>
      </header>
    </div>
  );
}

export default App;
