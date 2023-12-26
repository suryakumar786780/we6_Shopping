import { useSelector } from 'react-redux';
import './App.css';
import Router from './router';

function App() {
  const theme = useSelector(state =>  state.all.theme);
  return (
    <div className={`${theme}`}>
      <Router />
    </div>
  );
}

export default App;
