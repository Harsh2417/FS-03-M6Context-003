import Container from './Container';
import { DarkModeProvider } from './context/DarkMode';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;