import { useParams } from 'react-router-dom';

const Event = () => {
  const params = useParams();
  const title = params.title;

  return <div>{title}</div>;
};

export default Event;
