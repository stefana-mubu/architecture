/** @jsx jsx */
import { jsx } from "theme-ui"
import { cx, css } from 'emotion'
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import Intro from "@lekoarts/gatsby-theme-cara/src/sections/intro"

const Hero = () => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `full`], textAlign: `left` }}>
    <div className={wrapper}>
      <h2 className={headline}>The Poetics of Home</h2>
      <p className={cx(text, bigSpacer)}>a project by Stefana Dilova</p>
      <p className={cx(text, halfSpacer)}>The following project explores the most intimate space of a family – its home – with different atmospheres portrayed in eight short films chapters. </p>
      <p className={text}>
        Written content that describes imagined spaces of this type is the fundamental medium used in this analysis.<br /> Eight core atmospheric narratives from the auto-fictional novel <span className={italic}>Territory of Light</span> written by the Japanese author Yuko Tsushima were adapted into corresponding short film chapters. These film chapters came into being through the interpretation and representation of the text with the help of architectural and artistic tools. The poetical depictions of everyday spaces found in the novel that previously only existed in written word can be phenomenologically traced in the film.
      </p>
    </div>
  </div>
)

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 695px;
  margin: 0 auto;
  padding: 8rem 3rem 10rem;
  min-height: 100vh;
`

const headline = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 8px;
`

const text = css`
  margin: 0;
  font-weight: 300;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem !important;
  text-align: center;
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

export default Hero
