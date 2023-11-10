import SideBar from '../layouts/SideBar';

export function ErrorPage() {
  return (
    <main>
      <SideBar />
      <div id="error-page">
        <h1>Erreur</h1>
        <h2>Cette page est introuvable</h2>
      </div>
    </main>
  );
}
