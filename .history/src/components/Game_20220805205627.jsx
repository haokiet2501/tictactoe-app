import React from 'react'
import { useReducer } from 'react'
import Board from './Board'

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
} 

const gameReducer = (state, action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }

    return state;
}

const Game = () => {
    const {state, dispatch} = useReducer(gameReducer, initialState)

    return (
        <div className='game'>
            <Board cells={state.board}/>
        </div>
    )
}

export default Game
