import './App.css';
import People from './People.js';
import ParentComponent from './ParentComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <People />
        <ParentComponent />

      </header>
    </div>
  );
}

export default App;
