import React, { Component } from 'react';

import AudioPlayer from 'react-responsive-audio-player';


var playlist =
  [{ url: '../../../music/01 Hotel California.mp3',
     displayText: 'Hotel California' },
    { url: '../../../music/02 Witchy Woman.mp3',
     displayText: 'Witchy Woman' },
    { url: '../../../music/04 Son Of A Son Of A Sailor.mp3',
     displayText: 'Son Of A Son Of A Sailor' },
    { url: '../../../music/01 Dirty Deeds Done Dirt Cheap.mp3',
     displayText: 'Dirty Deeds Done Dirt Cheap' },
    { url: '../../../music/02 Dreams.mp3',
     displayText: 'Dreams' },
    { url: '../../../music/02 Night Moves.mp3',
     displayText: 'Night Moves' },
    { url: '../../../music/01_Cat_Scratch_Fever.mp3',
     displayText: 'Cat Scratch Fever' },
    { url: '../../../music/06 Back in the Saddle.mp3',
     displayText: 'Back in the Saddle' },
    { url: '../../../music/06 Cocaine.mp3',
     displayText: 'Cocaine' },
    { url: "../../../music/06 Jamie's Cryin'.mp3",
     displayText: "Jamie's Cryin'" },
     ];



class Player extends Component {
  render() {
    return (
      <div className="App"> 
         <div id="audio_player_container">
            <AudioPlayer style={{ position: 'fixed', bottom: 0 }}
            playlist={playlist} 
            cycle={true}
            autoplay={false}
          />
      </div>
    </div>
    );
  }
}

export default Player;
