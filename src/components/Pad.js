import React, { useState } from "react";
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Pad: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));


function Pad(props) {
    const classes = useStyles()

    const [elevation, setElevation] = useState(3)

    function play() {
        var audio = document.getElementById(getAudioId())
        audio.play()
    }

    function onMouseDown() {
        setElevation(0)
        play()
    }

    function getAudioId() {
        return "uniqueID"+props.padName
    }

    return (
        <div className='drum-pad' onMouseDown={() => onMouseDown()} onMouseUp={() => setElevation(3)}>
            <audio src={props.audioClip} id={getAudioId()} className="clip"></audio>
            <Paper className={classes.Pad} elevation={elevation} square>{props.padName}</Paper>
        </div>
    )
}

export default Pad