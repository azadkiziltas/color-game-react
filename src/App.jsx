import { useState } from "react";
import GameContainer from "./GameContainer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <GameContainer></GameContainer>
        </div>
    );
}

export default App;
