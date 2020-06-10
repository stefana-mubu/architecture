/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from 'emotion'
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="#3c3c3c"
      speed={0}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset} factor={0.5}>
      <div className={wrapper}>
        <h2 className={headline}>To view the projects section, please use a screen that is at least 1400px wide.</h2>
      </div>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor} />
  </div>
)

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 695px;
  margin: 0 auto;
`

const headline = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  color: white;
  margin-bottom: 8px;
`

export default Projects
