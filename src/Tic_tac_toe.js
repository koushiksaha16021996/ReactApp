import React, { Component } from 'react'

class Tic_tac_toe extends Component{
    constructor(props){
        super(props);
        this.state={
            player_turn:"X",
            Board:["","","","","","","","",""]
        }
    }
    squareClicked(index){
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

        for(let i=0;i<winning.length;i++){
            let winer=winning[i]
            let c1=winer[0]
            let c2=winer[1]
            let c3=winer[2]
            if(board[c1]!=''&&board[c1]==board[c2]&&board[c2]==board[c3]&&board[c3]==board[c1]){
                alert(`winning player ${playerTurn}`)
            }

        }


        playerTurn=(playerTurn=="X")?"O":"X"
        this.setState({
            player_turn:playerTurn,
            Board : board
        })
    }
    render(){
        return(
            <div className="App">
                
                <div className="board">
                    {this.state.Board.map((item,index)=><div onClick={()=>this.squareClicked(index)} className="square">{item}</div>)}
                </div>
            </div>
        )
    }
}
export default Tic_tac_toe