import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <div>
         <Login></Login>
         </div>
         <div>
         <Signup></Signup>
         </div>
      </main>
      </div>
  );
}

export default App;
