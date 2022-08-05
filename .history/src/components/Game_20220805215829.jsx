import React from 'react'
import { useReducer } from 'react'
import { ruleWinner } from '../rule';
import Board from './Board'

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
} 

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const {board, xIsNext} = state;
            const {index, winner} = action.payload;
            if(winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = xIsNext ? 'X' : 'O';
            nextState.xIsNext = !xIsNext;
            
            return nextState;
        }

        case 'RESET': {
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null);
            nextState.xIsNext = true;

            return nextState;
        }
    
        default:
            break;
    }

    return state;
}

const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    const winner = ruleWinner(state.board);
    const handleClick = (index) => {
        dispatch({
            type: "CLICK",
            payload: {
                index,
                winner
            }
        })
    }

    const handleReset = () => {
        dispatch({
            type: "RESET"
        })
    }
    return (
        <div className='game'>
            <Board cells={state.board} onClick={handleClick}></Board>
            {winner && <div className='game-winner'>{winner} Thắng.</div>}
            
        </div>
    )
}

export default Game
