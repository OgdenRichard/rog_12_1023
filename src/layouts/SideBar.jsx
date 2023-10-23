import React from 'react';
import meditation from '../assets/images/meditation.svg';
import swimming from '../assets/images/swimming.svg';
import bike from '../assets/images/bike.svg';
import dumbbells from '../assets/images/dumbbells.svg';

function SideBar() {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__icons">
          <img src={meditation} alt="logo yoga" />
          <img src={swimming} alt="logo natation" />
          <img src={bike} alt="logo cyclisme" />
          <img src={dumbbells} alt="logo musculation" />
        </div>
        <div className="sidebar__copyright">Hé salut ça va?</div>
      </section>
    </>
  );
}

export default SideBar;
