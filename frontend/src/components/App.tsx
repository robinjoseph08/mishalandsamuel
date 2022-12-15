import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Outlet } from 'react-router-dom';
import { faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const year = (new Date()).getFullYear();

const App = () => {
  const [muted, setMuted] = useState(false);

  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Autoplay on the audio element doesn't work as expected, so we manually
    // autoplay it. We also need to set the volume this way, so that works out.
    const id = setTimeout(() => {
      if (audio.current) {
        audio.current.volume = 0.5;
        audio.current.play();
      }
    }, 100);
    return () => clearTimeout(id);
  });

  return (
    <>
      <div className="header">
        <div className="inner">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/story">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/photos">Photos</NavLink>
            </li>
            <li>
              <NavLink to="/who">Who</NavLink>
            </li>
            <li>
              <NavLink to="/where">Where</NavLink>
            </li>
            <li>
              <NavLink to="/registry">Registry</NavLink>
            </li>
            {/*<li>*/}
            {/*  <NavLink to="/rsvp">RSVP</NavLink>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
      <audio autoPlay loop muted={muted} ref={audio}>
        <source src="/src/assets/audio/with_or_without_you_softer.mp3" type="audio/mpeg" />
      </audio>
      <Outlet />
      <div className="footer">
        <hr />
        <div className="inner">
          <p>&quot;...But the greatest of these is love.&quot; 1 Corinthians 13:13</p>
        </div>
        <hr className="small" />
        <div className="inner copy">
          <p>Designed and Developed by <a href="http://rmj.io" rel="noreferrer" target="_blank">Robin Joseph</a> &copy; 2015-{year}</p>
        </div>
      </div>
      <div className="audio">
        <h3>With Or Without You</h3>
        <h4>by Sungha Jung</h4>&nbsp;
        <div className="controls">
          <FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeUp} onClick={() => setMuted((prev) => !prev)} />
        </div>
      </div>
    </>
  );
};

export default App;
