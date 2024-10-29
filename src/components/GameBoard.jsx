export default function GameBoard({ onSelectSquare, board }) {
    return <ol id="game-board">
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                            disabled={playerSymbol !== null} // every button can only be click once
                            >
                                {playerSymbol}
                            </button>
                        </li>))}
                </ol>
        </li>))}
    </ol>;
}