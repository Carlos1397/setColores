import { useState } from "react";
import "./components/grilla.css";


function App() {
  const [color, setColor] = useState("#000");
  const [grid, setGrid] = useState(GenerarGrilla(10, 10));

  const handleClick = (row, col) => {
    setGrid((grid) =>
      grid.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? color : c)) : r
      )
    );
  };

  return (
    <>
      <table className="grid">
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((color, j) => (
                <td
                  style={{ backgroundColor: color }}
                  onClick={() => handleClick(i, j)}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="colors">
      <strong>Set colores: </strong>
      
        <div
          className={`color color-black ${color === "#000" ? "active" : null}`}
          onClick={() => setColor("#000")}
        ></div>
        <div
          className={`color color-blue ${
            color === "#0074d9" ? "active" : null
          }`}
          onClick={() => setColor("#0074d9")}
        ></div>
        <div
          className={`color color-green ${
            color === "#2ecc40" ? "active" : null
          }`}
          onClick={() => setColor("#2ecc40")}
        ></div>
      </div>
    </>
  );
}
export default App

const GenerarGrilla = (n, m) => {
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid[i] = [];
    for (let j = 0; j < m; j++) {
      grid[i][j] = "#000";
    }
  }
  return grid;
};