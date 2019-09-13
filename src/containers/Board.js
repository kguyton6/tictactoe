import React, { useState, useContext } from 'react';
import Square from '../components/Square';
import ErrorMessageContext from '../hooks/ErrorMessageContext';
import ErrorMessage from './ErrorMessage';
import { Button } from '../styles/styles';


export default () => {
    const [ squares, setSquare ] = useState(Array(9).fill(null))
    const [ isPlayerX, togglePlayer ] = useState(true);

    function handleClick(i) {
        let square = squares.slice()
        square[i] = isPlayerX ? 'X' : 'O';
        setSquare(square)
        return togglePlayer(isPlayerX => !isPlayerX)

    }

    return (
    <section>
    <aside>
    <span>Player: {isPlayerX ? 'X' : 'O'}</span>
    <button onClick={() => setSquare(Array(9).fill(null))}>Clear Board</button>
    </aside>
    <div className='board'>
        {squares.map((num, i) => <Square key={i} onClick={(e) => handleClick(i)} value={squares[i]} />)
        }
    </div>
    </section>
    )
}