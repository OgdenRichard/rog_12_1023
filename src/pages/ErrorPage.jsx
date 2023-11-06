import { useRouteError } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div id="error-page">
        <h1>Erreur</h1>
        <h2>Sorry, an unexpected error has occurred.</h2>
        <h2>{error.status}</h2>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
