import SideBar from '../layouts/SideBar';

export function ErrorPage() {
  return (
    <main>
      <SideBar />
      <div id="error-page">
        <h1>Erreur</h1>
        <h2>Sorry, an unexpected error has occurred.</h2>
      </div>
    </main>
  );
}
