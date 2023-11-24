// Only loads the YouTube player
import ReactPlayer from 'react-player/youtube'

const Overview = () => {
    return (
        <div>
            overview
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    );
};

export default Overview;