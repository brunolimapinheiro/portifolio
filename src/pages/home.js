import "./home.css";
import{useEffect,useState} from 'react';
import logo from '../img/html.png';


const Home = ()=>{
      const[text, setText]= useState("futuro dev Front-end");
      const[letras , setLetras] = useState(text.split(""));
      const p = document.querySelector(".work");

     
    return(
        <div>
           <div className="work">
              {text}
            <div className="imge">
              <img src={logo} alt="imagem" height={400} width={750}/>
            </div>
           </div>
        </div>
    )
}
export default Home;