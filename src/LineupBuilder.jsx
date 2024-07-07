import { useState, useEffect } from "react";
import "./LineupBuilder.css";
import SoccerLineUp from "react-soccer-lineup";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { toPng } from "html-to-image";
import Draggable from 'react-draggable';
import HowTo from "./HowTo";

export default function LineupBuilder() {
    const contentRef = useRef(null);

    const handleCapture = () => {
        const node = contentRef.current;
        toPng(contentRef.current, { cacheBust: true, width: 1150, height: 410 })
            .then(dataUrl => {
                console.log("Captured image:", dataUrl);
                const link = document.createElement("a");
                link.download = "lineup.png"
                link.href = dataUrl;
                link.click();
            })
            .catch(error => {
                console.error("Error capturing screenshot:", error)
            });
    };

    const draggebaleStuff = <>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <textarea className="playerNumber"></textarea>
                <textarea className="playerName"></textarea>
            </div>
        </Draggable>
    </>

    const pitch = {
        color: "588f58",
        pattern: "lines",
        showHomeTeam: false,
        homeTeamColor: "f08080",
        homeTeamNumberColor: "ffffff",
        homeGoalkeeperColor: "d6cb65",
        homeGoalkeeperNumberColor: "333333",
        nameColor: "ffffff"
    };

    const [error, setError] = useState(null);
    const [homeTeam, setHomeTeam] = useState(
        localStorage.getItem("homeTeam") === null
            ? {
                squad: {
                    gk: null,
                    df: [],
                    cdm: [],
                    cm: [],
                    cam: [],
                    fw: []
                },
                style: {
                    color: `#${pitch.homeTeamColor}`,
                    numberColor: `#${pitch.homeTeamNumberColor}`,
                    nameColor: `#${pitch.nameColor}`,
                }
            }
            : JSON.parse(localStorage.getItem("homeTeam"))
    );



    const formation =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4, 5],
            cdm: [6, 7],
            cm: [8],
            cam: [9, 10],
            fw: [11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const formation2 =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4, 5],
            cdm: [],
            cm: [6, 7, 8, 9],
            cam: [],
            fw: [10, 11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const formation3 =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4],
            cdm: [],
            cm: [5, 6, 7, 8],
            cam: [],
            fw: [9, 10, 11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const formation4 =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4, 5],
            cdm: [6, 7],
            cm: [],
            cam: [8, 9, 10],
            fw: [11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const formation5 =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4, 5],
            cdm: [6, 7],
            cm: [],
            cam: [8, 9],
            fw: [10, 11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const formation6 =
    {
        squad: {
            gk: 1,
            df: [2, 3, 4, 5],
            cdm: [],
            cm: [6, 7, 8, 9],
            cam: [10],
            fw: [11]
        },
        style: {
            color: `#${pitch.homeTeamColor}`,
            numberColor: `#${pitch.homeTeamNumberColor}`,
            nameColor: `#${pitch.nameColor}`,
        }
    }

    const [number, setNumber] = useState(1);
    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("gk");

    const handlePlayerNameChange = (evt) => {
        setPlayerName(evt.target.value);
    };

    const handlePlayerPositionChange = (evt) => {
        setPlayerPosition(evt.target.value);
    };

    const removePlayer = (position, id) => {
        if (position === "gk") {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: { ...homeTeam.squad, gk: null }
            }));
        } else if (position === "df") {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: {
                    ...homeTeam.squad,
                    df: homeTeam.squad.df.filter((player) => player.id !== id)
                }
            }));
        }
        else if (position === "cdm") {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: {
                    ...homeTeam.squad,
                    cdm: homeTeam.squad.cdm.filter((player) => player.id !== id)
                }
            }));
        }
        else if (position === "cm") {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: {
                    ...homeTeam.squad,
                    cm: homeTeam.squad.cm.filter((player) => player.id !== id)
                }
            }));
        }
        else if (position === "cam") {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: {
                    ...homeTeam.squad,
                    cam: homeTeam.squad.cam.filter((player) => player.id !== id)
                }
            }));
        }
        else {
            setHomeTeam((homeTeam) => ({
                ...homeTeam,
                squad: {
                    ...homeTeam.squad,
                    fw: homeTeam.squad.fw.filter((player) => player.id !== id)
                }
            }));
        }
    };

    const addPlayer = () => {
        setError(null);
        if (playerName === "") {
            setError("Player Name required!");
        }
        else if (1 + homeTeam.squad.df.length + homeTeam.squad.cdm.length + homeTeam.squad.cm.length + homeTeam.squad.cam.length + homeTeam.squad.fw.length >= 11) {
            setError("Squad is full!");
        }
        else {
            let playerObj = {
                id: nanoid(),
                number: number,
                name: playerName,
                color: `#${pitch.homeTeamColor}`,
                numberColor: `#${pitch.homeTeamNumberColor}`,
                namecolor: `#${pitch.nameColor}`
            };
            if (playerPosition === "gk") {
                if (homeTeam.squad.gk !== null) {
                    setError("goal keeper is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("gk", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: { ...homeTeam.squad, gk: playerObj }
                    }));
                }
            } else if (playerPosition === "df") {
                if (homeTeam.squad.df.length === 5) {
                    setError("defence is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("df", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: {
                            ...homeTeam.squad,
                            df: [...homeTeam.squad.df, playerObj]
                        }
                    }));
                }
            }
            else if (playerPosition === "cdm") {
                if (homeTeam.squad.cdm.length === 2) {
                    setError("defensive midfield is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("cdm", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: {
                            ...homeTeam.squad,
                            cdm: [...homeTeam.squad.cdm, playerObj]
                        }
                    }));
                }
            }
            else if (playerPosition === "cm") {
                if (homeTeam.squad.cm.length === 3) {
                    setError("centre midfield is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("cm", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: {
                            ...homeTeam.squad,
                            cm: [...homeTeam.squad.cm, playerObj]
                        }
                    }));
                }
            }
            else if (playerPosition === "cam") {
                if (homeTeam.squad.cam.length === 3) {
                    setError("Attacking midfield is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("cam", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: {
                            ...homeTeam.squad,
                            cam: [...homeTeam.squad.cam, playerObj]
                        }
                    }));
                }
            }
            else {
                if (homeTeam.squad.fw.length === 2) {
                    setError("Forward is full!");
                } else {
                    playerObj.onClick = () =>
                        removePlayer("fw", playerObj.id);
                    setHomeTeam((homeTeam) => ({
                        ...homeTeam,
                        squad: {
                            ...homeTeam.squad,
                            fw: [...homeTeam.squad.fw, playerObj]
                        }
                    }));
                }
            }
        }
        setNumber(number + 1);
    };

    const [showtab, setShowtab] = useState(1);
    const [showDiv, setShowDiv] = useState(1);
    const [showlineup, setShowlineup] = useState(1)
    const handletab = (evt) => {
        setShowtab(evt);
    }
    const handleDiv = (evt) => {
        setShowDiv(evt)
    }
    const handlelineup = (evt) => {
        setShowlineup(evt);
    }

    return (
        <div className="containerFluid">
            <div className="sliders">
                <button className="customBtn" onClick={() => { handlelineup(1); handletab(1) }} style={{ color: showtab === 1 ? 'turquoise' : 'gray' }}>Custom</button>
                <button className="preBuiltBtn" onClick={() => handletab(2)} style={{ color: showtab === 2 ? 'turquoise' : 'gray' }}>Prebuilt</button>
            </div>
            <div className="row">
                <div className={showtab === 1 ? "col-2" : "custom"} >
                    <form className="userForm">
                        <div className="formRow">
                            <div className="formError">
                                {error !== null ? (
                                    <div
                                        className="alert alert-danger p-2 m-0"
                                        role="alert"
                                    >
                                        {error}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="playerName"><b>Player Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="playerName"
                                    placeholder="Player Name"
                                    value={playerName}
                                    onChange={handlePlayerNameChange}
                                />
                            </div>

                            <div>
                                <label className="col-form-label">
                                    <b>Player Position</b>
                                </label>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="gk"
                                            id="gk"
                                            checked={playerPosition === "gk"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="gk">
                                            Goal Keeper
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="df"
                                            id="df"
                                            checked={playerPosition === "df"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="df">
                                            Defence
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="cdm"
                                            id="cdm"
                                            checked={playerPosition === "cdm"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="cdm">
                                            Defensive Midfielder
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="cm"
                                            id="cm"
                                            checked={playerPosition === "cm"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="cm">
                                            Midfielder
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="cam"
                                            id="cam"
                                            checked={playerPosition === "cam"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="cam">
                                            Attacking Midfielder
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="fw"
                                            id="fw"
                                            checked={playerPosition === "fw"}
                                            onChange={handlePlayerPositionChange}
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1" for="fw">
                                            Forward
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="buttonPosition">
                        <button className="addButton" onClick={addPlayer}>
                            Add Player
                        </button>
                    </div>
                    <hr />
                </div>
                <div className={showtab === 2 ? "col-2" : "preBuilt"} >
                    <div className="formRow" id="formRowColor">

                        <div>
                            <label className="col-form-label">
                                <b>Lineup Formations</b>
                            </label>

                            <button className="lineupbtn" onClick={() => handlelineup(2)}>4-3-3</button>
                            <button className="lineupbtn" onClick={() => handlelineup(5)}>4-2-3-1</button>

                            <button className="lineupbtn" onClick={() => handlelineup(3)}>4-4-2</button>
                            <button className="lineupbtn" onClick={() => handlelineup(6)}>4-2-2-2</button>

                            <button className="lineupbtn" onClick={() => handlelineup(4)}>3-4-3</button>
                            <button className="lineupbtn" onClick={() => handlelineup(7)}>4-4-1-1</button>

                        </div>
                    </div>
                    <hr />
                </div>
                <div ref={contentRef} className=" col-9" >
                    <div className={showlineup === 1 ? "col9" : "div1Hide"}>
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            pattern={"lines"}
                            homeTeam={homeTeam}
                        />
                    </div>
                    <div className={showlineup === 2 ? "col9" : "div2Hide"}  >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                    <div className={showlineup === 3 ? "col9" : "div3Hide"} >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation2}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                    <div className={showlineup === 4 ? "col9" : "div4Hide"} >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation3}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                    <div className={showlineup === 5 ? "col9" : "div5Hide"} >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation4}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                    <div className={showlineup === 6 ? "col9" : "div6Hide"} >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation5}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                    <div className={showlineup === 7 ? "col9" : "div7Hide"} >
                        <SoccerLineUp
                            size={"fill"}
                            color={"green"}
                            homeTeam={formation6}
                        />
                        <div className="playerInputs">
                            <div className="playerLabels">
                                <label>Player#: </label>
                                <label className="playerLabel">Player Name: </label>
                            </div>
                            {draggebaleStuff}
                        </div>
                    </div>
                </div>
            </div>
            <button className="downloadButton" onClick={handleCapture}>
                Download
            </button>
            <HowTo />
        </div>
    )
}