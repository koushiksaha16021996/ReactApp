import React, { Component } from 'react'
import './Tic_tac_toe.css'
class Tic_tac_toe extends Component{
    constructor(props){
        super(props);
        this.state={
            player_turn:"X",
            Board:["","","","","","","","",""],
            history:[],
            condition: "true",
            Winner:""
        }
    }
    squareClicked(index){
        
        if(this.state.condition=="true" && this.state.Board[index]==''){

            let playerTurn=this.state. player_turn
            let board = this.state.Board
            let playerHistory=this.state.history
            console.log("index",index)
            board[index]=playerTurn
            playerHistory.push("Index-"+index+"->"+"player "+playerTurn)

            
            //winning logic
            let winning=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            let conditions="true"
            let showWinner=""
            for(let i=0;i<winning.length;i++){
                let winer=winning[i]
                let [c1,c2,c3]=winer
                if(board[c1]!=''&&board[c1]==board[c2]&&board[c2]==board[c3]&&board[c3]==board[c1]){
                    //alert(`winning player ${playerTurn}`)
                    showWinner="Congratulation Player "+playerTurn+" "+"for Won the game."
                    conditions="false"
                    break
                }
            }
            
            //Switch player
            playerTurn=(playerTurn=="X")?"O":"X"
            //set the updated State 
            this.setState({
                player_turn:playerTurn,
                Board : board,
                history:playerHistory,
                Winner: showWinner,
                condition: conditions
            })

            // match draw functionality
            let flag="true"
            for(let i=0;i<board.length;i++){
                if(board[i]==''){
                    flag="false"
                }
            }
            if(flag=="true" && conditions=="true")
            {
                alert("Match draw")
                this.reset()
            }
        }
    }
    reset=()=>{
        this.setState({
            player_turn:"X",
            Board:["","","","","","","","",""],
            condition: "true",
            history:[],
            Winner:""
        })
        console.log("reset")
    }
    render(){
        return(
            <div>
                <div>
                <h1 className="nameColour">Tic-tac-toe Game</h1>
                </div>
                <div>
                    <h3 className="nameColour">Current Player :- {this.state.player_turn}</h3>
                    <h3 className="winner">{this.state.Winner}</h3>
                </div>
                <div className="App">
                    
                    <div className="root">
                        <div className="board">
                            {this.state.Board.map((item,index)=><div onClick={()=>this.squareClicked(index)} className="square"><h2>{item}</h2></div>)}
                        </div>
                        <div className="history">
                            {this.state.history.map(item=><div className="eachHistory">{item}</div>)}
                        </div>
                    </div>

                </div>

                <div>
                    <button className="button" onClick={()=>this.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Tic_tac_toe