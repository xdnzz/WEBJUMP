import React, {useState, useEffect} from 'react';
import './style.css';
import logo from './logo.png';
import { MdMenu } from "react-icons/md";
import materiais from './api'

export default function Header(){
  const [menu, setMenu] = useState(false) ;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);


    
  },[])

  const currentPage = window.location.href;
  

  const menuToggle = () => {
setMenu(!menu)
  }

      

  
    return (
        <>
        <header>
            <section className="login">
            <span><a href="/">Acesse sua conta</a> ou <a href="/">Cadastre-se</a></span>
            </section>
            <div className='divisor'>
            <section className="banners">
                <img src={logo}/>
                <div className='search'><input type="text" className="text"/><button className={ currentPage!= 'http://localhost:3000/' ? 'buttonSearchAlternative' : 'buttonSearch'}>BUSCAR</button></div>
            </section>
            </div>
            <button onClick={menuToggle}
              className='BTN'><MdMenu size={20}/></button>
           {(menu || screenWidth > 800) && (
              <section className="menu-nav">
              <ul>
                  <li><a href="/">Página Inicial</a></li>
                  {materiais.items.map((e)=>{
                      return(
                          <li key={e.name}><a href={e.name}>{e.name}</a></li>
                      )
                  })}
                  <li><a href="/">Contato</a></li>
                      
              
              </ul>
              
          </section>
           )}
           
        </header>
        </>
    )
}