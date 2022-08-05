import React from 'react'
import Cell from './Cell'

const Board = (props) => {
    return (
        <div className='game-board'>
            {props.cell}
        </div>
    )
}

export default Board
