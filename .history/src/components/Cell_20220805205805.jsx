import React from 'react'

const Cell = (props) => {
    return (
        <div className='game-cell'>
            {props.cell}
        </div>
    )
}

export default Cell
