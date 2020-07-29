import React from 'react';
import Header from './header';
import Footer from './footer';

// eslint-disable-next-line
export default function (props) {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  );
}
