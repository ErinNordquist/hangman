import {useState} from "react";
import Card from "@mui/material/Card";

function Tile(props) {
    const [val, setVal] = useState(props["val"])

    return (
        <Card className="letter-show"
              onClick={props['onClick']}>{val}</Card>
    )
}
export default Tile;