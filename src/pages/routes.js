import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Calças from './Calças';


export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                {/* <Route path="/camisetas" component={Camisetas}/> */}
                <Route path="/calças" component={Calças}/>
                {/* <Route path="/calçados" component={Calçados}/> */}

            </Switch>
        </BrowserRouter>
    )
}