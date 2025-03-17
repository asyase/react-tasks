import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import AddButton from "./component/AddButton";
import LoginPage from './component/LoginPage';

function App() {
  let userLoggedIn = false;  

  return (
      <div className='App'>
        <Header />
        {userLoggedIn ? <Content /> : <LoginPage />}  
        <AddButton />
      </div>
  );
}

export default App;
