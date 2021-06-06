import React, { useState } from 'react';
import reactDom from 'react-dom';
import Tictactoe from "./Tictactoe";
import {createBoard} from "./utils/Boardutils"


let BoardContext = React.createContext();
  function App() {

    let blank=createBoard();
    let [board,setBoard]=useState(blank);
    
  return (
    <BoardContext.Provider value={{board,setBoard}}>
      <Tictactoe/>
    </BoardContext.Provider>    
  );
}

export {App,BoardContext};
