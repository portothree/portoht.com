import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = props => {
  return (
    <>
      <div
        style={{
          margin: `100px auto 10px auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{props.children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
