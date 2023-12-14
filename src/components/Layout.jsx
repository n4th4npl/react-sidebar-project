import React from 'react';
import Sidebar from "./Sidebar";
import Nav from './Nav';
import Conferences from '../pages/Conferences';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <div className='mx-28'>
      <div>
        <Nav />
        <Sidebar />
      </div>
      <div>
        <h1>hey!</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
