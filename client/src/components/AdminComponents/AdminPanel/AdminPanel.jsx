import React from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
// import { Link } from 'react-router-dom';
// import { reactRouter } from '../../../utils/utils.js';

function AdminPanel(props) {
  return (
    <>
      {
        localStorage.getItem('token') &&
        <div className='app-container'>
          <h1>Административный режим</h1>
          <AdminMenu />
        </div>
      }
    </>
  );
}

export default AdminPanel;
