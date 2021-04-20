import React, { Component } from 'react'
import './Tic_tac_toe.css'
class Tic_tac_toe extends Component{
    constructor(props){
        super(props);
        this.state={
            player_turn:"X",
            Board:["","","","","","","","",""],
            condition: "true"
        }
    }
    squareClicked(index){
        
        if(this.state.condition=="true" && this.state.Board[index]==''){

        let playerTurn=this.state. player_turn
        let board = this.state.Board
        console.log("index",index)
        board[index]=playerTurn

        

        let winning=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4.7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let conditions="true"
        for(let i=0;i<winning.length;i++){
            let winer=winning[i]
            let c1=winer[0]
            let c2=winer[1]
            let c3=winer[2]
            if(board[c1]!=''&&board[c1]==board[c2]&&board[c2]==board[c3]&&board[c3]==board[c1]){
                alert(`winning player ${playerTurn}`)
                conditions="false"
            }
        }
        this.setState({
            condition: conditions
        })


        playerTurn=(playerTurn=="X")?"O":"X"
        this.setState({
            player_turn:playerTurn,
            Board : board
        })
    }
    }
    render(){
        return(
            <div className="App">
                <h1>Tic tac toe game</h1>
                <div className="board">
                    {this.state.Board.map((item,index)=><div onClick={()=>this.squareClicked(index)} className="square"><h2>{item}</h2></div>)}
                </div>
            </div>
        )
    }
}
export default Tic_tac_toe