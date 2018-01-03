import React, { Component } from 'react';

import AudioPlayer from 'react-responsive-audio-player';


var playlist =
  [{ url: '../../../music/01 Hotel California.mp3',
     displayText: 'Hotel California' },
   { url: '../../../music/01-Hotel-California.mp3',
     displayText: 'Hotel California' }];



class Player extends Component {
  render() {
    return (
      <div className="App"> 
         <div id="audio_player_container">
            <AudioPlayer style={{ position: 'fixed', bottom: 0 }}
            playlist={playlist} 
            cycle={true}
            autoplay={true}
          />
      </div>
    </div>
    );
  }
}

export default Player;
