import React from 'react'
import Header from './header'
import Footer from './footer'

export default function (props) {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  )
}
