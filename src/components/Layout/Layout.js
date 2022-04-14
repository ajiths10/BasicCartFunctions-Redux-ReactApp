import { Fragment } from 'react';
import MainHeader from './MainHeader';
import Notification from '../Notification/Notification';

const Layout = (props) => {
  return (
    <Fragment>
      <Notification />
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
