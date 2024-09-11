import React from 'react';
import Orders from './Orders';

const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <section>
        <h2>Completed Orders</h2>
        <Orders status="completed" />
      </section>
      <section>
        <h2>Pending Orders</h2>
        <Orders status="pending" />
      </section>
    </div>
  );
};

export default Admin;
