import SideBar from '../layouts/SideBar';

export function ErrorPage({ message = 'Page introuvable' }) {
  return (
    <main>
      <SideBar />
      <div id="error-page">
        <h1>Erreur</h1>
        <h2>{message}</h2>
      </div>
    </main>
  );
}
