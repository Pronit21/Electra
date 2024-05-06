import PropTypes from 'prop-types';
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

function Hero({ setPlayStatus, setHeroCount, heroCount, playStatus, text1, text2 }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore More</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play" >
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>Watch the video</p>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  setPlayStatus: PropTypes.func.isRequired,
  setHeroCount: PropTypes.func.isRequired,
  heroData: PropTypes.object.isRequired,
  heroCount: PropTypes.number.isRequired,
  playStatus: PropTypes.bool.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Hero;

