import './App.css';
import GlobalStateContext from './context/GlobalStateContext';
import AppContainer from './components/AppContainer/AppContainer';

function App() {
  return (
    <GlobalStateContext>
      <AppContainer/>
    </GlobalStateContext>
  );
}

export default App;
