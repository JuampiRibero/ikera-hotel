import Lottie from 'react-lottie';
import animationData from '../../animations/ikera-hotel-loader.json';
import './Loader.css';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='loader'>
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    );
};

export default Loader;