import DataFetching from '../components/DataFetching';

export const Home = () => {
  return (
    <main>
      <DataFetching isMocked={false} />
      <div>Home Page</div>
    </main>
  );
};
