import cardDataFromScript from "../../scripts/CardData";

import "./GameComponent-styles.css"

let cardData = cardDataFromScript;

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function GameComponent({play, setPlay, setWin, currentScore, updateCurrentScore, topScore, updateTopScore}) {
    cardData = shuffle(cardData);

    function checkForWin() {
        for (const card of cardData) {
            if (!card.clicked) {
                return;
            }
        }
        updateTopScore(10);
        setPlay(false);
        setWin(true);
        for (const card of cardData) {
            card.clicked = false;
        }
    }

    function onClickHandler(event) {
        if (play) {
            const target = event.target.parentNode;
            const card = cardData[target.classList[0].substring(0,1)];
            
            if (target.classList.contains("clicked")) {
                if (currentScore > topScore) {
                    updateTopScore(currentScore);
                }
                for (const card of cardData) {
                    card.clicked = false;
                }
                setPlay(false);
            }
            else {
                card.clicked = true;
                updateCurrentScore(currentScore + 1);
                checkForWin();
            }
        }
    }

    return <div id="card-display">
        {cardData.map((data, index) => {
            let classData = [index];
            if (data.clicked) {
                classData.push("clicked");
            }
            return <button key={index} id="card-button" className={classData.join(", ")} onClick={onClickHandler}>
                <img id="card-image" src={data.imageURL}></img>
            </button>;
        })}
    </div>;
}

export default GameComponent;