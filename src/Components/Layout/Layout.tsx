import React from 'react'
import Navbar from '../Navbar/Navbar'
function Layout ({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
