import Countdown from 'react-countdown';
import pluralize from 'pluralize';

import type { CountdownRendererFn } from 'react-countdown';

const date = new Date(2015, 5, 27, 10, 0);

const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
  return (
    <h2 className="countdown">
      {Boolean(days) && <span>{days} <span className="words">{pluralize('day', days)}</span></span>}
      {Boolean(hours) && <span>{hours} <span className="words">{pluralize('hour', hours)}</span></span>}
      {Boolean(minutes) && <span>{minutes} <span className="words">{pluralize('minute', minutes)}</span></span>}
      {Boolean(seconds) && <span>{seconds} <span className="words">{pluralize('second', seconds)}</span></span>}
    </h2>
  );
};

const Home = () => {
  return (
    <div className="jumbotron" id="home">
      <div className="inner">
        <h1>Mishal and Samuel</h1>
        <h2 className="date">06.27.15</h2>
        <Countdown date={date} overtime renderer={renderer} />
        <h3><a href="https://twitter.com/intent/tweet?hashtags=mishalandsamuel" rel="noreferrer" target="_blank">#mishalandsamuel</a></h3>
      </div>
    </div>
  );
};

export default Home;
