import React from 'react'
import Cell from './Cell'

const Board = (props) => {
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell>
                    
                </Cell>
            ))};
        </div>
    )
}

export default Board
