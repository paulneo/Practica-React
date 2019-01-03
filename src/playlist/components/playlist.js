import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volumen from '../../icons/components/volumen';
import Enlarge from '../../icons/components/enlarge';



function Playlist(props)  {
  const playlist = props.data.categories[0].playlist
  const categories = props.data.categories
  return (
    <div>
      <Play
        size={90}
        color="red"
      />
      <Pause
        size={90}
        color="red"
      />
      <Volumen
        size={90}
        color="red"
      />
      <Enlarge
        size={90}
        color="red"
      />
      {
        categories.map((item) => {
          return <div>
                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                    <div className="Playlist">
                      {
                        item.playlist.map((i) => {

                          return <Media {...i} key={i.id}/>

                        })
                      }
                    </div>
                  </div>
        })
      }
    </div>
  );
}

export default Playlist;
