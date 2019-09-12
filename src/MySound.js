import React from 'react';
import Sound from 'react-sound';

class MySound extends React.Component {
  render() {

  // ( dayDone ? _ : _ )

  return (
    <Sound
      url="http://romanrosenast.com/wp-content/uploads/2018/07/setEnd.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
}
}

export default MySound;
