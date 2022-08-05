import React from 'react'
import { useReducer } from 'react'
import { rule } from '../../rule';
import Board from './Board'

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
} 

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            
            break;
    
        default:
            break;
    }

    return state;
}

const Game = () => {
    const {state, dispatch} = useReducer(gameReducer, initialState)

    const winer = rule(state.board);
    const handleClick = (index) => {
        dispatch({
            type: "CLICK",
            payload: {
                winner
            }
        })
    }

    const handleReset = () => {

    }
    return (
        <div className='game'>
            <Board cells={state.board} onClick={handleClick}/>
            <button className='game-reset' onClick={handleReset}>Làm mới</button>
        </div>
    )
}

export default Game
