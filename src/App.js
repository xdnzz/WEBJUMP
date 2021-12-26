import React from 'react';
import './App.css'
import Header from './components/Header';
import Rotas from './pages/routes';

export default function App(){
  return(
    <>
 
    <Header/>
    <main className='mainContent'>
      <div className='content'>
      <Rotas/>
      </div>
    </main>
    
    </>
  )
}