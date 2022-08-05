import React from 'react'
import { useReducer } from 'react'
import Board from './Board'

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
} 

const gameReducer = () {
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}

const Game = () => {
    const {state, dispatch} = useReducer(gameReducer, initialState)

    return (
        <div className='game'>
            <Board cells={StaticRange.board}/>
        </div>
    )
}

export default Game
