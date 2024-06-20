import "./GameEndComponent-styles.css";

function GameEndComponent({play, setPlay, win, setWin, updateCurrentScore}) {
    let displayMessage = "";
    function restartButtonHandler() {
        setPlay(true);
        setWin(false);
        updateCurrentScore(0);
    }

    if (!play) {
        if (win) displayMessage = "You Win!!!";
        else displayMessage = "You Lose";
    }

    return <div id="game-end-display">
        <h2 id="display-message">{play === false ? displayMessage : ""}</h2>
        <button id="restart-button" onClick={restartButtonHandler}>{play === false ? "Restart" : ""}</button>
    </div>
}

export default GameEndComponent;