import React, { useState } from 'react'
import Board from './board'


const calculateWinner = (board) => {
    const posibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < posibilities.length; i++) {
        const [a, b, c] = posibilities[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}


const Game = () => {
    let [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState('X');
    const [step, setStep] = useState(0);

    const jumpTo = (move) => {
        setStep(move);
        const next = move & 1 ? "O" : "X";
        setXIsNext(next);
    };

    const actions = history.map((step, move) => {
        const decider = move ? "Go to move " + move : "RESET";
        return (
            <li className="actions-list" key={move}>
                <button className="btn btn-outline-primary" onClick={() => jumpTo(move)}>
                    {decider}
                </button>
            </li>
        );
    });

    const handleClick = (i) => {
        history = history.slice(0, step + 1);
        const values = history[history.length - 1];
        const newValues = values.slice();
        if (calculateWinner(values) || values[i]) return;
        newValues[i] = xIsNext;
        setHistory(history.concat([newValues]));

        let next = "X";
        if (xIsNext === "X") next = "O";
        setStep(history.length);
        setXIsNext(next);
    }

    const winner = calculateWinner(history[step]);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext);
    }


    return (
        <div className="game">
            <p className='player'>player 1 : X</p>
            <p className='player'> player 2 : O </p>
            <div className="game-board">
                <div className="status">{status}</div>
                <Board
                    board={history[step]}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <ol className="actions"> {actions} </ol>
            </div>
        </div>
    );
}



export default Game
