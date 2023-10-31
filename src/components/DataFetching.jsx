import Activity from './Activity';
import Performance from './Performance';
import Sessions from './Sessions';

function DataFetching({ isMocked }) {
  return (
    <>
      <div>Fetch tryout</div>
      <Activity userId={18} />
      <Performance userId={18} />
      <Sessions userId={18} />
    </>
  );
}

export default DataFetching;
