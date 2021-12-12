import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Product from './pages/Product/Product'
import DetailPage from './components/DetailPage/DetailPage'
import {Header} from './components/Header/Header'
import 'font-awesome/css/font-awesome.css'
import {ProductProvider} from "./Context";


function App() {


  return (
    <React.Fragment>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Product} />
					<Route path="/details" component={DetailPage} /> 
				</Switch>
			</BrowserRouter>
		</React.Fragment>
  );
}

export default App;
