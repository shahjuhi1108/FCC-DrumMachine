import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Pad from "./Pad"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';

// const bankOne = [
//     {
//       keyCode: 81,
//       keyTrigger: 'Q',
//       id: 'Heater-1',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
//     },
//     {
//       keyCode: 87,
//       keyTrigger: 'W',
//       id: 'Heater-2',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
//     },
//     {
//       keyCode: 69,
//       keyTrigger: 'E',
//       id: 'Heater-3',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
//     },
//     {
//       keyCode: 65,
//       keyTrigger: 'A',
//       id: 'Heater-4',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
//     },
//     {
//       keyCode: 83,
//       keyTrigger: 'S',
//       id: 'Clap',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
//     },
//     {
//       keyCode: 68,
//       keyTrigger: 'D',
//       id: 'Open-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
//     },
//     {
//       keyCode: 90,
//       keyTrigger: 'Z',
//       id: "Kick-n'-Hat",
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
//     },
//     {
//       keyCode: 88,
//       keyTrigger: 'X',
//       id: 'Kick',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
//     },
//     {
//       keyCode: 67,
//       keyTrigger: 'C',
//       id: 'Closed-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
//     }
//   ];
  
//   const bankTwo = [
//     {
//       keyCode: 81,
//       keyTrigger: 'Q',
//       id: 'Chord-1',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
//     },
//     {
//       keyCode: 87,
//       keyTrigger: 'W',
//       id: 'Chord-2',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
//     },
//     {
//       keyCode: 69,
//       keyTrigger: 'E',
//       id: 'Chord-3',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
//     },
//     {
//       keyCode: 65,
//       keyTrigger: 'A',
//       id: 'Shaker',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
//     },
//     {
//       keyCode: 83,
//       keyTrigger: 'S',
//       id: 'Open-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
//     },
//     {
//       keyCode: 68,
//       keyTrigger: 'D',
//       id: 'Closed-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
//     },
//     {
//       keyCode: 90,
//       keyTrigger: 'Z',
//       id: 'Punchy-Kick',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
//     },
//     {
//       keyCode: 88,
//       keyTrigger: 'X',
//       id: 'Side-Stick',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
//     },
//     {
//       keyCode: 67,
//       keyTrigger: 'C',
//       id: 'Snare',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
//     }
//   ];


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }));


function DrumMachine() {
    const classes = useStyles()
    return(
        <Container maxWidth="sm">
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    title="Drum Machine" style={{ textAlign: 'center' }}/>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Pad padName="Q" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="W" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="E" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></Pad>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Pad padName="A" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="S" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="D" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></Pad>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Pad padName="Z" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="X" audioClip="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></Pad>
                    </Grid>
                    <Grid item xs>
                        <Pad padName="C" audioClip="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></Pad>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

export default DrumMachine