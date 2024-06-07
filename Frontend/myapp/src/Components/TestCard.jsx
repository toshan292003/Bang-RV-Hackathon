import React from "react";

export default function TestCard(props){
    return(
        <>
            <div className="testcard">
                <h1>
                    {props.name}
                </h1>
                <button>Attempt Test</button>
            </div>
        </>
    )
}