import {useState} from "react";


function Man(props) {
    const centerX = 50;
    const centerY = 10;
    const radius = 4;
    const bodyParts =[
        {
            leq: 1, ele:
                <ellipse name="head"
                         cx={centerX} cy={centerY}
                         rx={radius} ry={radius} stroke="black"/>
        },{
            leq: 2, ele:
                <line name="body"
                      x1={centerX} y1={centerY+radius}
                      x2={centerX} y2={centerY+radius*5.1} stroke="black" />
        },{
            leq: 3, ele:
                <line name="left-arm"
                      x1={centerX} y1={centerY+radius*1.5}
                      x2={centerX-radius*2.5} y2={centerY+radius*2} stroke="black" />
        },{
            leq:4, ele:
                <line name="right-arm"
                      x1={centerX} y1={centerY+radius*1.5}
                      x2={centerX+radius*2.5} y2={centerY+radius*2} stroke="black" />
        },{
            leq:5, ele:
                <line name="left-leg"
                      x1={centerX} y1={(centerY+radius*5)}
                      x2={centerX-radius*2} y2={centerY+radius*8} stroke="black" />
        }, {
            leq: 6, ele:
                <line name="right-leg"
                      x1={centerX} y1={(centerY+radius*5)}
                      x2={centerX+radius*2} y2={centerY+radius*8} stroke="black" />
        }]

    return (

        <svg viewBox="0 0 100 50">
            <line name="beam-left"
                  x1={centerX} y1={centerY-radius}
                  x2={centerX} y2={centerY-radius*2.15} stroke="black"/>
            <line name="beam-top"
                  x1={centerX} y1={centerY-radius*2}
                  x2={centerX+radius*3.6} y2={centerY-radius*2} stroke={"black"}/>
            <line name="beam-right"
                  x1={centerX+radius*3.5} y1={centerY-radius*2}
                  x2={centerX+radius*3.5} y2={46} stroke={"black"}/>
            {bodyParts.map((bp) => {
                if (bp.leq <= props.mistakeCount)
                    return bp.ele
            })}
        </svg>

    );
}

export default Man;