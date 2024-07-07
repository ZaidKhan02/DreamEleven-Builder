import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./HowTo.css"

export default function HowTo() {
    const [showDiv, setShowDiv] = useState(1);
    const handleDiv = (evt) => {
        setShowDiv(evt)
    }

    return (
        <>
            <div id="sectionOne">
                <h1 className="subTitle">DreamEleven - Create Your Dream <br /> Football Lineups</h1>
                <div className="sectionOnePara">
                    <p>DreamEleven Builder is an online football lineup creator. Build your own lineups using the lineup creater tool. Share lineups with other users and compare against one another to see which lineup is best. </p>
                </div>
            </div>
            <div id="sectionTwo">
                <h1 className="questionMark"><FontAwesomeIcon icon={faCircleQuestion} /></h1>
                <h1 className="subTitle">How Does It Work?</h1>
                <div className="sliders howToBtn">
                    <button className="customBtn" onClick={() => handleDiv(1)} style={{ color: showDiv === 1 ? 'turquoise' : 'gray' }}>Custom</button>
                    <button className="preBuiltBtn" onClick={() => handleDiv(2)} style={{ color: showDiv === 2 ? 'turquoise' : 'gray' }}>Prebuilt</button>
                </div>
                <div className={showDiv === 1 ? "howTo" : "howToCustom"}>
                    <div>
                        <h2 className="howToTitle">How to build your football lineup?</h2>
                        <p>You can create your football lineup by adding the player's name and selecting one of the six player positions. The maximum number of players in the lineup is 11 and the maximum number of players per position is the following: <li>Goalkeeper - 1</li> <li>Defence - 5</li> <li>Defensive Midfield - 2</li> <li>Midfielder - 3</li> <li>Attacking Midfield - 3</li> <li>Forward - 2</li></p>
                    </div>
                    <div>
                        <h2 className="howToTitle">How to edit your lineup?</h2>
                        <p>If you want to make any changes to your lineup before downloading it, simply click on the player you wish to remove from your lineup. Then you will be able to add another player to that position or a totally different position.</p>
                    </div>
                    <div>
                        <h2 className="howToTitle">How to share your lineup?</h2>
                        <p>Once you have finished creating your lineup, simply click the Download button. This will create a .png file in your local storage of your created football lineup which you will be able to share with others on the DreamEleven website!</p>
                    </div>
                </div>
                <div className={showDiv === 2 ? "howTo" : "howToPrebuilt"}>
                    <div>
                        <h2 className="howToTitle">How to build your football lineup?</h2>
                        <p>You can create your football lineup by selecting one of the six created lineups: <li>4-3-3</li> <li>4-4-2</li> <li>3-4-3</li> <li>4-2-3-1</li> <li>4-2-2-2</li> <li>4-4-1-1</li></p>
                    </div>
                    <div>
                        <h2 className="howToTitle">How to edit your lineup?</h2>
                        <p>Once you have selected the lineup you wish to use, you can drag any of the red or green boxes towards the player that you want to edit! The red box represents the player's number and the green box represents the player's name.</p>
                    </div>
                    <div>
                        <h2 className="howToTitle">How to share your lineup?</h2>
                        <p>Once you have finished creating your lineup, simply click the Download button. This will create a .png file in your local storage of your created football lineup which you will be able to share with others on the DreamEleven website!</p>
                    </div>
                </div>
            </div>


        </>
    );
}
