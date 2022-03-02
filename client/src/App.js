import './App.css';
import CreateTask from './components/CreateTask';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header'>
          <h1>GNAR BACKEND TEST</h1>
          <p>This is a simple UI for creating tasks</p>
          <br />
          <ArrowDownwardIcon />
        </div>
        <CreateTask />
      </header>
    </div>
  );
}

export default App;
