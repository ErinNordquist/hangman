import {useState} from "react";
import Tile from './Tile';

function TileField(props) {
    const [tiles, setTiles] = useState(props["tiles"]);
    const [showVal, setShowVal] = useState(props['guessed'])

    return (
        <div>
            <h3>{props.title}</h3>
            {tiles.map((t) => {
                if(t.guessed===showVal) {
                    return <Tile val={t.val} onClick={()=>{if (t.guessed==='false') props.updateTileStatus(t.val)}}/>
                }
                }
            )}
        </div>
    )


}

export default TileField;