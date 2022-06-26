import logo from './logo.svg';
import './App.css';

import Game from './Game';
import {useEffect, useState} from "react";
import {Button} from "@mui/material";


function App() {
    const [word, setWord] = useState(null);
    const [game, setGame] = useState(null);
    const getWord = () => {
        fetch("https://random-word-api.herokuapp.com/word")
            .then(res => res.json())
            .then((result) => {//console.log(result);
                setWord(result[0].toUpperCase().split(""));},
                (error) => {return 'x'.toUpperCase().split("");})
    }

    useEffect(() => {
        if (word)
            setGame(<Game word = {word} key={word}></Game>);
        }, [word])

  return (
    <div className="App">
      <header className="App-header">
        <h1>HangMan</h1>
      </header>
      <body>
        {/*<Game word = {getWord()}></Game>*/}
        <Button onClick={getWord}>New Game</Button>
        {game}
      </body>
    </div>
  );
}

export default App;
