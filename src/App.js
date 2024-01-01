import './App.css';
import logo from "./img/android-chrome-512x512.png";
import Projetos from './pages/projetos';
import Contatos from './pages/contatos';
import Home from './pages/home';
import { useState,useEffect } from 'react';
function App() {

const[page,setPage]=useState(<Home/>);
console.log(window.location.pathname);

useEffect(()=>{
  switch (window.location.pathname) {
    case "/":
      setPage(<Home/>)
      break;
  
     case "/Projetos":
      setPage(<Projetos/>)
      break;

      case "/Contatos":
        setPage(<Contatos/>)
        break;
       
  }
},window.location.pathname)
  
  return (
   <div>
    <header>
        <div >
          <img src={logo} alt="img"/>
        </div>

         <div className="block">
          <nav>
            <a className={page === <Home/> ? 'active' : ''} href= "/">Home</a>
            <a className={page === <Projetos/> ? 'active' : ''} href="/Projetos">Projetos</a>
            <a className={page === <Contatos/> ? 'active' : ''} href="/Contatos">Contatos</a>
          </nav>
        </div>
    </header>

      {page}

   </div>
  );
}

export default App;
