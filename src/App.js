import logo from './logo.svg';
import './App.css';
import { GlobalStateProvider } from "./globalState";
import Box from './components/Box'
import Switch from './components/Switch'
import Adder from './components/Adder'
import Backer from './components/Backer'
import FactorSet from './components/FactorSet'

function App() {
  return (
    <GlobalStateProvider>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
        <Adder />
        <Backer />
        <FactorSet />
      </div>
      <Switch />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box />
      </div>
    </GlobalStateProvider >
  );
}

export default App;
