import './App.css';
import Header from './Header'

function App() {

  const handleNameChange = () => {
    const names =['Gowtham Sankar','Jay Kumar','Manoj','Karthik'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }

  return (
    <div className="App">
      < Header />
      {handleNameChange()} 
    </div>
  );
}

export default App;
