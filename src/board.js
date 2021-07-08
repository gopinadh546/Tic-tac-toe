import React from 'react'
import Square from './square'


const board = (props) => {
    return (
        <div>
            <div className="board-row">
                <Square value={props.board[0]} onClick={() => { props.onClick(0) }} />
                <Square value={props.board[1]} onClick={() => { props.onClick(1) }} />
                <Square value={props.board[2]} onClick={() => { props.onClick(2) }} />
            </div>
            <div className="board-row">
                <Square value={props.board[3]} onClick={() => { props.onClick(3) }} />
                <Square value={props.board[4]} onClick={() => { props.onClick(4) }} />
                <Square value={props.board[5]} onClick={() => { props.onClick(5) }} />
            </div>
            <div className="board-row">
                <Square value={props.board[6]} onClick={() => { props.onClick(6) }} />
                <Square value={props.board[7]} onClick={() => { props.onClick(7) }} />
                <Square value={props.board[8]} onClick={() => { props.onClick(8) }} />
            </div>
        </div>
    );
}

export default board
