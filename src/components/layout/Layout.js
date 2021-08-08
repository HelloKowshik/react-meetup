import React from 'react';
import MainNav from './MainNav';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
