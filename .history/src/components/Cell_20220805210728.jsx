import React from 'react'

const Cell = ( {value, onClick, className} ) => {
    return (
        <div className={`game-cell ${c}`}>
            {value}
        </div>
    )
}

export default Cell
