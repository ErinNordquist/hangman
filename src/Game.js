import {useState} from "react";
import './Game.css'
import Card from '@mui/material/Card';
import TileField from "./TileField";
import Man from "./Man";

function Game(props) {

    const [word, setWord] = useState(props.word);
    const [wordSpaces, setWordSpaces] = useState(props.word.map(letter => {
        return {val: letter, element:'?'}
    }))
    const [mistakes, setMistakes] = useState(0);
    const [error, setError] = useState(null);

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K"
        ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const [tiles, setTiles] = useState(alphabet.map(
        (a)=>{return {val: a, guessed:'false'};}));

    const updateTileStatus=(updateVal)=>{
        let allTiles=tiles;
        allTiles=allTiles.map((t)=> {
            if (updateVal===t.val) {
                t.guessed = 'true'
            }
            return t
        })
        updateWordSpaces(updateVal);
        setTiles(allTiles);
    }
    const countRevealed = (arr) => {
        return arr.filter(obj => {
            if (obj.element !== '?')
                return true;
            return false;
        }).length
    }

    const updateWordSpaces=(guessedVal)=> {
        let initialRevealedCount = countRevealed(wordSpaces);
        let newWordSpaces = wordSpaces;
        newWordSpaces=newWordSpaces.map(ws=>{
            if (ws.val===guessedVal) {
                ws.element=ws.val;
            }
            return ws
        })

        if (countRevealed(newWordSpaces) === initialRevealedCount)
            setMistakes(mistakes+1);

        setWordSpaces(newWordSpaces);
    }



    if (error) {
        return (<div>Error: {error.message}</div>);
    } else {
        return (
            <div>
                <div className='third-box'>
                    <TileField tiles={tiles}
                               guessed="false"
                               updateTileStatus={updateTileStatus}
                               title='Letter Bank'
                    />
                </div>
                <div className='third-box'>
                    <Man mistakeCount={mistakes}></Man>
                </div>
                <div className='third-box'>
                    <TileField tiles={tiles}
                               guessed="true"
                               updateTileStatus={updateTileStatus}
                               title='Guessed'
                    />
                </div>
                {wordSpaces.map((ws)=><Card className='letter-show'>{ws.element}</Card>)}
            </div>);
    }
}

export default Game;