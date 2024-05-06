import './Background.css'; // Import the CSS file for background styling
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import video1 from '../../assets/video1.mp4';
import sports2 from '../../assets/sports2.jpg';
import dash from '../../assets/dash.jpg';
import mech2 from '../../assets/mech2.jpg';

function Background({ playStatus, heroCount }) {
    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={sports2} className='background fade-in' alt="" />;
    } else if (heroCount === 1) {
        return <img src={mech2} className='background fade-in' alt="" />;
    } else if (heroCount === 2) {
        return <img src={dash} className='background fade-in' alt="" />;
    } else {
        return null; // Return null if none of the conditions match
    }
}

// PropTypes for prop validation
Background.propTypes = {
    playStatus: PropTypes.bool.isRequired,
    heroCount: PropTypes.number.isRequired,
};

export default Background;
