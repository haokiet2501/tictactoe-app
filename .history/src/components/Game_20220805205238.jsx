import React from 'react'
import Board from './Board'

const Game = () => {
    return (
        <div className='game'>
            <Board cells={StaticRange.board}/>
        </div>
    )
}

export default Game
