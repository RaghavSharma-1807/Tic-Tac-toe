import { useContext, useState } from "react";
import { BoardContext } from "./App";
import produce from "immer"

let moves = 0;
function Tictactoe() {
   let {board,setBoard}= useContext(BoardContext);
   let [player,setplayer] =useState(0);

   console.log(board);

   
  let checkWinner = (board) => {
    const lines = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [[a, b], [c, d], [e, f]] = lines[i];
      if (
        board[a][b] === board[c][d] &&
        board[a][b] === board[e][f] &&
        board[a][b] != -1
      ) {
        return player;
      }
    }
    return null;
  };

  return (
    <div 
    style={{
      display:"flex",
      width:"100vw",
      height:"100vh",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"Grey"
    }}>

    {
    
      board.map(function(row,rowIndex){
        return <div style={{
          display:"flex",
          flexDirection:"row",
       
        }}>{
          row.map(function(item,colIndex){
            return <button style={{
              width:"100px",
              height:"100px"
            }}onClick={function(){
              const  updated = produce(board, draftState => {
               if(draftState[rowIndex][colIndex]==-1){
                 draftState[rowIndex][colIndex]=player;
               }
             });
             let answer = checkWinner(updated);
                    moves++;
                    if (answer != null || moves == 9) {
                      if(answer == null && moves == 9){
                        window.alert(
                          "Unfortunately the game is Tied. Try once more ! :)"
                        );
                      }else{
                        window.alert(
                          "Congratulations " + (answer == 1 ? "Cross" : "Circle")
                        );
                      }
                      window.location.reload();
                    }


             setBoard(updated);
             setplayer(player==0?1:0);
             }}>
               {item==-1? " ":item == 1 ? "X" : "0"}
             </button>
          })

          }</div>
       
      })}
     
    </div>
  );
}

export default Tictactoe;