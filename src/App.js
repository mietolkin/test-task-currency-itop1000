import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import MacTop from "./components/MacTop/MacTop";
import { useState, useEffect } from "react";
import { Context } from "./context";


function App() {
  
  return (
    <div className="container">
      <MacTop />  
      <Header />
      <Converter />
    </div>      
   );
}

export default App;
