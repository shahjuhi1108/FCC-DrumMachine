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
        if (props.power) {
            var audio = document.getElementById(getAudioId())
            props.onButtonClick(props.bank)
            audio.volume = props.volume
            audio.play()
        }
    }

    function handleMouseDown() {
        setElevation(0)
        play()
    }

    function getAudioId() {
        return props.bank.keyTrigger
    }
    
    return (
        <div className='drum-pad' id={"ID"+getAudioId()} onMouseDown={handleMouseDown} onMouseUp={() => setElevation(3)}>
            <audio src={props.bank.url} id={getAudioId()} className="clip"></audio>
            <Paper className={classes.Pad} elevation={elevation} square>{props.bank.keyTrigger}</Paper>
        </div>
    )
}

export default Pad