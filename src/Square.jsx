import './App.css' ;
import { useState } from "react";
function Square({value, onSquareClick})
 {
    
    
    // const [value, setValue] = useState(null);

   
    return (
    

      <button 
        className="square"
        onClick={onSquareClick}>
        
          {value}
          </button>);
  }
export default Square;