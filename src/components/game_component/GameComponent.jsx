import imageDataFromScript from "../../scripts/ImageData";
import "./GameComponent-styles.css"

let imageData = imageDataFromScript;

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

function GameComponent({currentScore, updateCurrentScore, topScore, updateTopScore}) {
    imageData = shuffle(imageData);

    return <div id="card-display">
        {imageData.map((data, index) => {
            let classData = [index];
            if (!data.clicked) {
                classData.push("clicked");
            }
            return <button  key={index} id="card-button" className={classData.join(", ")}>
                <img id="card-image" src={data.imageURL}></img>
            </button>;
        })}
    </div>;
}

export default GameComponent;