// Only loads the YouTube player
import ReactPlayer from 'react-player/youtube'

const Overview = () => {
    return (
        <div className='w-full'>
            overview
            <ReactPlayer controls style={{ maxWidth: '300px', maxHeight: '200px' }} /* style={{ width: `${300}` }} */ /* controls width={100} */ url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    );
};

export default Overview;