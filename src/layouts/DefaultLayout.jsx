import React from 'react'
import Header from "../components/Header/Header";
export default function DefaultLayout({children}) {
  return (
    <>
        <Header></Header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
  )
}
