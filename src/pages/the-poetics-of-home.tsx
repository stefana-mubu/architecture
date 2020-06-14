import React, { useState, useEffect } from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import Fallback from "@lekoarts/gatsby-theme-cara/src/components/fallback"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"
const IDEAL_HEIGHT = 1000
const IDEAL_HEIGHT_CONTACT = 800

const Cara = () => {
  const { width, height } = useWindowDimensions()
  const heightToIdealHeightRation = IDEAL_HEIGHT / height
  const heightToIdealHeightRationContact = IDEAL_HEIGHT_CONTACT / height

  const factor = heightToIdealHeightRation >= 1 ? heightToIdealHeightRation : 1
  const factorContact = heightToIdealHeightRationContact >= 1 ? heightToIdealHeightRationContact : 1.2
  const projectFactor = width < 580 ? 5 * heightToIdealHeightRation / 2 : 0.7 + factor
  const projectDivider = width < 580 ? projectFactor - heightToIdealHeightRation / 2 : projectFactor - 0.4
  const aboutOffset = factor + projectFactor - ( heightToIdealHeightRation >= 1 ? 1 : heightToIdealHeightRation ) / 2
  const contactOffset = aboutOffset + factor - 0.4

  return (
    <Layout>
      <Parallax pages={2 * factor + factorContact / 2 + projectFactor}>
        <Hero offset={0} factor={factor} />
        <Projects offset={factor} factor={projectFactor} factorDivider={projectDivider} />
        <About offset={aboutOffset} factor={factor} />
        <Contact offset={contactOffset} factor={factorContact} />
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
