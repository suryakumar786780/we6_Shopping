import { useSelector } from 'react-redux';
import './App.css';
import Router from './router';

function App() {
  const theme = useSelector(state => state.all.theme);
  const isLogin = localStorage.getItem('isLogin');
  console.log('isLogin from APP: ', isLogin);

  return (
    <div className={`${theme} outer`}>
      {/* <div className={`${isLogin && theme} outer`}></div> */}
      <Router />
    </div>
  );
}

export default App;
