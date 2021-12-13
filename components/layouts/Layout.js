import React from "react";
import HeadTags from "./HeadTags";
import Navbar from '../FixedNavbar'
import {hero_container,headings,paragraphs,inside_hero_container,button} from "../../styles/homePage.module.css"
import Footer from "../Footer";

function Layout({children}) {
  return (
    <div>
        <HeadTags />
        <Navbar />
        <section className={hero_container}>
          <div className={inside_hero_container}>
            <h1 className={headings}>CRYPTO CLOUD </h1>
            <h1 className={headings}>HASHING </h1>
            <p className={paragraphs}>Invest in Bitcoin, Join CRYPTO CLOUD HASHING, Trusted and Original Bitcoin Multiplier</p>
            <button className={button}>Login</button>
          </div>
        </section>
        <section >
          {children}
        </section>
        <Footer/>
    </div>
  )
}

export default Layout;
