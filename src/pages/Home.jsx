import DataFetching from '../components/DataFetching';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <DataFetching isMocked={false} />
      <div>Home Page</div>
      <Link to={'profile/12'}>User 12</Link>
      <Link to={'profile/18'}>User 18</Link>
    </main>
  );
};
