import React,{useState} from 'react';
import './style.css';
import materials from './api';
import menuNav from './menuApi';
import { MdList, MdGridOn } from "react-icons/md";






export default function Calças(){

const [gridList, setGridList] = useState(true);
const [render, setRender] = useState(materials);
const [mapRender, setMapRender] = useState(materials);
const  AllCategories = ['Exibir todos',...new Set(materials.map(item => item.filters.gender))];

const listar = () => {
  setGridList(false)
}
const grindar = () => {
  setGridList(true)
}

function filtrar(par){
if(par==='Exibir todos'){
  setRender(materials);
  return;

} else {
  const filterProduct = mapRender.filter(item => item.filters.gender === par);
  setRender(filterProduct);
}
}


    return(
      <section className='fatherDiv'>
      <section className='mapSite'><span><a href="/">Página inicial</a></span> 
      {'>'} 
      <span>Calças</span></section>
        <main className="container">
        <aside className="NavMenu">
           <div className='contentMenu'>
           <h3 className='title-filter'>FILTRE POR</h3>
            <h5 className='category'>GÊNERO</h5>
            <div className='productFilter'>
            {AllCategories.map((e)=>{
            return( 
            <div>
            <input 
            onClick={()=>filtrar(e)}
            type="radio" id="scales" name="scales"
            />

            <label for="scales">{e}</label>
            </div>
            )
            
             })}
            </div>
            <h5 className='category'>NAVEGAÇÃO RÁPIDA</h5>
            <ul>
                {menuNav.items.map((e)=>{
                    return(
                        <li key={e.name}><a href={e.name}>{e.name}</a></li>
                    )
                })}
                
            </ul>
           
           </div>
        </aside>
        <div className='contentOrganization'>
        <span id='titleContentOrganization'>Calças</span>
        <hr/>
        <section className='filtersSection'>
            <div className='icons'>
              <MdGridOn className='singleiIcon' onClick={grindar}
              color='#ED1A39' size={22}/> 
              <MdList className='singleiIcon' onClick={listar} 
              color='#00A8A9' size={32}/>
            </div>
            <div className='filterBySelect'>
            <span>ORDENAR POR</span>
                <select>
                  <option>Preço⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option>
                </select>
            </div>
          </section>
        <div className={gridList ? 'content' : 'contentList'}>
          
            {render.map((e)=>{
                return(
                    <div key={e.id} className='card'>
                        <img alt={e.name} src={e.image}/>
                        <span>{e.name}</span>
                        <div>
                          <ul className='pricesProduct'>
                            {!e.specialPrice ? '' :  
                            <li className='originalPrice'>R${e.specialPrice}</li>}
                            <li className='salePrice'>R${e.price}</li>
                          </ul>
                        </div>
                        <button>COMPRAR</button>
                    </div>
                )
            })}
        </div>
        </div>
        </main>
        </section>
    )
}