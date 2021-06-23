/** @jsx jsx */
import { jsx } from "theme-ui"
import { cx, css } from 'emotion'
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import AboutMDX from "@lekoarts/gatsby-theme-cara/src/sections/about"

const About = () => (
    <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `full`], textAlign: `left` }}>
      <div className={wrapper}>
        <h2 className={headline}>About the project</h2>
        <p className={cx(text, halfSpacer)}><span className={italic}>The Poetics of Home</span> explores imagined spaces of ‘home’ that are described in fictional literature.</p>
        <p className={cx(text, halfSpacer)}>The novel <span className={italic}>Territory of Light</span> by the Japanese author Yuko Tsushima was chosen for this analysis.</p>
        <p className={cx(text, halfSpacer)}>The story in the book follows the life of a single mother and daughter for one year in an apartment on the top floor of a dilapidated office building in Tokyo. The work by Thushima encapsulates very poetical images of ‘home’, as well as how it is perceived by the main character, Fujino.</p>
        <p className={cx(text, halfSpacer)}>The author of <span className={italic}>The Poetics of Home</span> imagined and visually translated some of the spaces of the home described in the book. Atmospheric properties such as light, colours, shadows, materials, the seasons and sounds enable a different way to perceive a space that up to now existed only in the form of text.</p>
        <p className={cx(text, halfSpacer)}>The eight short films represent and vitalise different atmospheres and conditions in the apartment that the main character of the book inhabits. These atmospheres can be traced through the original text in Japanese and its translation into English by Geraldine Harcourt.</p>
      </div>
    </div>
)

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 695px;
  margin: 0 auto;
  padding: 5rem 1rem;
`

const headline = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 24px;
`

const text = css`
  margin: 0;
  font-weight: 300;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem !important;
  text-align: left;
`

const halfSpacer = css`
  margin-bottom: 16px;
`

const bigSpacer = css`
  margin-bottom: 32px;
`

const italic = css`
  font-style: italic;
`

export default About
