import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props)  {


  return (
    <div className="Playlist">

      <div >
        {
          props.playlist.map((item) => {
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    </div>
  );
}

export default Playlist;
