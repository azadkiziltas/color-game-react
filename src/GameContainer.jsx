import { Container } from "react-bootstrap";
import "./button.css";
import { useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export default function GameContainer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [score, setScore] = useState(0);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setScore(0);
        const newColors = buttonColors.map(getRandomColor);
        setButtonColors(newColors);
        setIsModalOpen(false);
    };

    const [buttonColors, setButtonColors] = useState(Array(9).fill(null));

    function handleClick(event, selectedColor) {
        if (
            window.document.getElementById("selectedColor").innerHTML ===
            window.getComputedStyle(event.target).backgroundColor
        ) {
            console.log(true);
            const newColors = buttonColors.map(getRandomColor);
            setButtonColors(newColors);
            setScore(score + 1);
        } else {
            console.log(false);
            openModal();
        }
    }

    function getRandomButtonColor() {
        const min = 0;
        const max = buttonColors.length;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        // Uygulama başladığında her butona farklı bir rastgele renk atama
        const randomColors = Array(9)
            .fill(null)
            .map(() => getRandomColor());
        setButtonColors(randomColors);
    }, []);

    // Rastgele renk üreten fonksiyon
    function getRandomColor() {
        const randomColor = `rgb(${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )})`;
        return randomColor;
    }
    return (
        <>
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-md-7 p-5">
                        <div className="card">
                            <h1
                                id="selectedColor"
                                className="card-header p-3 text-center"
                            >
                                {buttonColors[getRandomButtonColor()]}
                            </h1>
                            <div className="card-body">
                                <div className="row m-2">
                                    <button
                                        id="0"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[0],
                                        }}
                                    ></button>
                                    <button
                                        id="1"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[1],
                                        }}
                                    ></button>
                                    <button
                                        id="2"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[2],
                                        }}
                                    ></button>
                                </div>
                                <div className="row m-2">
                                    <button
                                        id="3"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[3],
                                        }}
                                    ></button>
                                    <button
                                        id="4"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[4],
                                        }}
                                    ></button>
                                    <button
                                        id="5"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[5],
                                        }}
                                    ></button>
                                </div>
                                <div className="row m-2">
                                    <button
                                        id="6"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[6],
                                        }}
                                    ></button>
                                    <button
                                        id="7"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[7],
                                        }}
                                    ></button>
                                    <button
                                        id="8"
                                        onClick={() =>
                                            handleClick(event, selectedColor)
                                        }
                                        className="col btn m-3"
                                        style={{
                                            backgroundColor: buttonColors[8],
                                        }}
                                    ></button>
                                </div>
                            </div>
                            <h2 className="card-footer m-0 p-3 text-center text-body-secondary">
                                Score : {score}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` modal ${isModalOpen ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: isModalOpen ? "block" : "none" }}
            >
                <div className="container h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="card text-center">
                            <div className="card-header">Game Over!</div>
                            <div className="card-body">
                                <h5 className="card-title">Score: {score}</h5>
                                <p className="card-text">
                                    if you work hard you can score higher. Trust
                                    yourself!
                                </p>
                                <div
                                    onClick={closeModal}
                                    className="btn btn-primary"
                                >
                                    Rety
                                </div>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Created by Azad
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
