import { Outlet } from 'react-router-dom';
import React from 'react';
import BarraNavegacion from '../components/Navbar';
import '../style.css';

function Root() {
  return (
    <>
      <BarraNavegacion />
      <Outlet />
    </>
  );
}

export default Root;
