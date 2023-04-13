
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import { UserProvider } from './UserContext';
import Portal from './Components/Portal/Portal';
import IncomePage from './Components/Income/IncomePage';
import ExpensesPage from './Components/Expenses/ExpensesPage';
import Dashboard from './Components/DashBoard/Dashboard';


function App() {
  return (
    <>
    <BrowserRouter>
        <UserProvider>
        <Routes>
          <Route path='/' element= { <Login/>}/>
          <Route  path='/portal' element= {<Portal/>}>
            <Route path='/portal' element = {<Dashboard/>}/>
            <Route path='income' element= {<IncomePage/>}/>
            <Route path='expenses' element={<ExpensesPage/>}/>
          </Route>
        </Routes>
        </UserProvider>
    </BrowserRouter>
   
    </>
     
  
  );
}

export default App;
