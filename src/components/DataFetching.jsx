import useFetch from '../hooks/useFetch';
import Activity from './Activity';
import Performance from './Performance';
import Sessions from './Sessions';

function DataFetching({ isMocked }) {
  return (
    <>
      <div>Fetch tryout</div>
      <Activity />
      <Performance />
      <Sessions />
    </>
  );
}

export default DataFetching;
