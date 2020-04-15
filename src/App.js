import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
    const INIT_SIZE = 3;

    const initGrid = (size) => {
        const newGrid = [];
        for (let x = 0; x < size; x++) {
            const arr = new Array(size);
            arr.fill({});
            newGrid.push(arr);
        }
        return newGrid;
    };

    const initial = {
        size: INIT_SIZE,
        grid: initGrid(INIT_SIZE),
    };
    const [state, setState] = useState(initial);

    const handleChange = (e) => {
        let newSize = e.target.value;
        newSize = parseInt(newSize, 10) > 40 ? 40 : parseInt(newSize, 10);
        const newGrid = initGrid(newSize);
        setState({ ...state, size: newSize, grid: newGrid });
    };
    const toggleClass = (e) => {
        e.target.classList.toggle("active");
    };
    return (
        <div className="App">
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <h1 className="navbar-item is-size-4">
                                    Game of Life!
                                </h1>
                            </div>

                            <div className="navbar-start">
                                <span className="navbar-item">
                                    Please enter size of grid:
                                </span>
                                <span className="navbar-item">
                                    <input
                                        className="input"
                                        type="text"
                                        id="size"
                                        value={state.size}
                                        onChange={handleChange}
                                    ></input>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="content">
                            {state.grid.map((row) => {
                                // console.log("row", row);
                                return (
                                    <div className="flex-container">
                                        {row.map((item) => {
                                            // console.log("col", item);
                                            return (
                                                <div
                                                    className="flex-item"
                                                    onClick={toggleClass}
                                                >
                                                    {/* {item === null
                                                        ? "null"
                                                        : "O"} */}
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
