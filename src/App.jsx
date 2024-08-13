import { useState } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult((prev) => prev + e.target.id);
  };

  const deletAll = () => {
    setResult("");
  };

  const deletOne = () => {
    setResult(result.slice(0, -1));
  };

  const calculation = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  /*  
    eval() is a built-in JavaScript function that evaluates JavaScript code represented as a string.
    In this case, eval() is used to dynamically evaluate the arithmetic expression entered by the user.
*/

  return (
    <div className="min-h-screen w-full flex items-center flex-col">
      <h1 className="text-4xl font-bold text-pink-400">Calculator</h1>
      <div className="max-w-96  border-4 p-4 bg-rose-400 border-pink-400 rounded-md">
        <input
          type="text"
          value={result}
          className="bg-slate-900 rounded-md p-4 w-full text-2xl tracking-wider text-right font-semibold border-ping-200 shadow-inner text-white"
        />
        <p className=" bg-slate-300 mt-2  rounded-full border-2 border-slate-400 inline-block px-3 py-1 my-2 text-red-500 text-sm tracking-wide ">
          Brand Calculator
        </p>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={deletAll}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="AC"
          >
            AC
          </button>
          <button
            onClick={deletOne}
            className="bg-slate-400 text-pink-800 shadow-inner shadow-current "
            id="DEL"
          >
            DEL
          </button>
          <button
            onClick={handleClick}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="."
          >
            .
          </button>
          <button
            onClick={handleClick}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="/"
          >
            /
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="7"
          >
            7
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="8"
          >
            8
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="9"
          >
            9
          </button>
          <button
            onClick={handleClick}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="*"
          >
            *
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="4"
          >
            4
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="5"
          >
            5
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="6"
          >
            6
          </button>
          <button
            onClick={handleClick}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="-"
          >
            -
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800 shadow-inner shadow-current "
            id="1"
          >
            1
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="2"
          >
            2
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="3"
          >
            3
          </button>
          <button
            onClick={handleClick}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="+"
          >
            +
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="00"
          >
            00
          </button>
          <button
            onClick={handleClick}
            className="bg-green-400 text-pink-800  shadow-inner shadow-current"
            id="0"
          >
            0
          </button>
          <button
            onClick={calculation}
            className="bg-slate-400 text-pink-800  shadow-inner shadow-current"
            id="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
