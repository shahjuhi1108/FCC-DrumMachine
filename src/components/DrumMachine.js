import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Pad from "./Pad"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Typography from '@material-ui/core/Typography';


const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    slider: {
        width: 200,
        padding: theme.spacing(2)
    },
    displayId: {
        backgroundColor: '#DCDCDC',
        padding: theme.spacing(2),
        height: '3vw'
    }
  }));


function DrumMachine() {
    const [power, setPower] = useState(true)
    const [bank, setBank] = useState(true)
    const [volume, setVolume] = useState(30);

    const classes = useStyles()

    function handleClick(event) {
        document.getElementById("display").innerHTML = event.id
    }

    function handlePower() {
        setPower(!power)
        document.getElementById("display").innerHTML = ""
    }

    function handleVolume(e, newVolume) {
        setVolume(newVolume)
    }

    function getPads(j) {
        let values = []
        for (var i = 0; i < 3; i++) {
            values.push(<Grid item xs> 
            <Pad onButtonClick={handleClick} power={power} volume={volume/100} bank={bank ? bankOne[j*3+i] : bankTwo[j*3+i]}></Pad>
            </Grid>
            )
        }
        return values
    }

    var pads = []
    for (var j = 0; j < 3; j++) { 
        pads.push(
            <Grid container spacing={3}>
                {getPads(j)}
            </Grid>
        )
    }
    
    return(
        <Container id="drum-machine" maxWidth="sm">
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    title="Drum Machine" style={{ textAlign: 'center' }}/>
                    {pads}
                <Grid>
                <Grid container spacing={2}>
                    <Grid item>
                        <FormControlLabel
                        control={<Switch
                            checked={power}
                            onChange={handlePower}
                            color="secondary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />}
                        label="Power"
                        />
                    </Grid>
                    <Grid item>
                        <div className={classes.slider}>
                            <Typography style={{ textAlign: 'center' }} id="continuous-slider" gutterBottom>
                                Volume: {volume}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <VolumeDown />
                                </Grid>
                                <Grid item xs>
                                    <Slider value={volume} onChange={handleVolume} aria-labelledby="continuous-slider" />
                                </Grid>
                                <Grid item>
                                    <VolumeUp />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                        control={<Switch
                            checked={bank}
                            onChange={() => setBank(!bank)}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />}
                        label="Bank"
                        />
                    </Grid>
                </Grid>
                <Card variant="outlined" className={classes.displayId}>
                    <p id="display" style={{ textAlign: 'center' }}></p>
                </Card>
                {/* <FormGroup row>
                    <FormControlLabel
                    control={<Switch
                        checked={power}
                        onChange={() => setPower(!power)}
                        color="secondary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />}
                    label="Power"
                    />
                    <div className={classes.slider}>
                        <Typography style={{ textAlign: 'center' }} id="continuous-slider" gutterBottom>
                            Volume: {volume}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xs>
                                <Slider value={volume} onChange={(event, newValue) => setVolume(newValue)} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>
                    </div>
                    <FormControlLabel
                    control={<Switch
                        checked={bank}
                        onChange={() => setBank(!bank)}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />}
                    label="Bank"
                    />
                </FormGroup> */}
                </Grid>
            </Card>
        </Container>
    );
}

export default DrumMachine