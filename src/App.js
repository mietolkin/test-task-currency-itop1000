import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import MacTop from "./components/MacTop/MacTop";
import { useState, useEffect } from "react";
import useFetch from './hooks.js/UseFetch'
import { Context } from "./context";


function App() {
  const {data: dataUsd, loading: loadingUsd, error: errorUsd} = useFetch('https://api.exchangerate.host/latest?base=EUR')
  const {data: dataEur,  loading: loadingEur, error: errorEur} = useFetch('https://api.exchangerate.host/latest?base=USD')
  const {data: dataCny, loading: loadingCny, error: errorCny} = useFetch('https://api.exchangerate.host/latest?base=CNY')
  const {data: dataUah, loading: loadingUah, error: errorUah} = useFetch('https://api.exchangerate.host/latest?base=UAH')
  
  const result = { 
    "USD": {dataUsd, loadingUsd, errorUsd},
    "EUR": {dataEur, loadingEur, errorEur},
    "CNY": {dataCny, loadingCny, errorCny},
    "UAH": {dataUah, loadingUah, errorUah}
  }
  
  return (
    <Context.Provider value={{result}}>
      <div className="container">
        <MacTop />  
        <Header />
        <Converter />
      </div>      
    </Context.Provider>
   );
}

export default App;
