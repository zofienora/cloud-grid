import CloudOne from '../assets/cloud1.png';
import CloudTwo from '../assets/cloud2.png';
import CloudThree from '../assets/cloud3.png';

function Clouds() {
    return(
        <>
        <div className="grid-clouds">
            <img src={CloudOne} alt="Cloud 1" className="cloud cloud1" />
            <img src={CloudTwo} alt="Cloud 2" className="cloud cloud2" />
            <img src={CloudThree} alt="Cloud 3" className="cloud cloud3" />
        </div>
        </>
    )
}

export default Clouds;