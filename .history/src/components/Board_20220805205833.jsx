import React from 'react'
import Cell from './Cell'

const Board = (props) => {
    return (
        <div className='game-board'>
            {props.cell.map(item, index) => ()}
        </div>
    )
}

export default Board
