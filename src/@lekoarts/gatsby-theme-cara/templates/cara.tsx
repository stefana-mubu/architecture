import React, { useState, useEffect } from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import Fallback from "@lekoarts/gatsby-theme-cara/src/components/fallback"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => {
  const { width } = useWindowDimensions()
  const isBigEnough = width > 1399

  return (
    <Layout>
      <Parallax pages={isBigEnough ? 4 : 3}>
        <Hero offset={0} factor={1} />
        {isBigEnough ? <Projects offset={1} factor={1.5} /> : <Fallback offset={1} factor={0.5} />}
        <About offset={isBigEnough ? 2.6 : 1.5} factor={1} />
        <Contact offset={isBigEnough ? 3 : 2} factor={1} />
      </Parallax>
    </Layout>
  )
}


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = typeof window !== 'undefined' ? window : {}

  return {
    width,
    height
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}

export default Cara
