import { ITitle } from '@/@types/activity';
import { activityVideos } from '@/data/activityPage/activitiesVideo';
const VideoSection = ({ title }: ITitle) => {
  const videoUrl = activityVideos[title];
  return (
    <div className=' h-[60%] sm:px-10 md:h-auto md:px-[10vw]'>
      <iframe src={videoUrl} className='m-auto h-full w-full rounded-xl md:h-[80vh]' allowFullScreen></iframe>
    </div>
  );
};

export default VideoSection;
