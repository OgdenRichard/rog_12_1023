import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'red' : 'white',
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyle} to={'/'}>
        Accueil
      </NavLink>
      <NavLink style={navLinkStyle} to={'/profile'}>
        Profil
      </NavLink>
      <NavLink style={navLinkStyle} to={'/settings'}>
        Réglage
      </NavLink>
      <NavLink style={navLinkStyle} to={'/community'}>
        Communauté
      </NavLink>
    </nav>
  );
};
