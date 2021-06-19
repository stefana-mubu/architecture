/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from 'emotion'
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import ProjectsMDX from "@lekoarts/gatsby-theme-cara/src//sections/projects"
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = ({ offset, factor = 2, factorDivider = 2 }: { offset: number; factor?: number; factorDivider?: number }) => (
  <div>
    <Divider
      bg="#3c3c3c"
      speed={0}
      offset={offset}
      factor={factorDivider}
    />
    <Content speed={0.4} offset={offset} factor={factor}>
      <div sx={{ display: `flex`, justifyContent: `center`, width: [`full`], textAlign: `left` }}>
        <div
          className={listContainer}
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 4],
            gridTemplateColumns: '1fr',
            h2: { gridColumn: `-1/1` },
          }}
        >
          <ProjectsMDX />
        </div>
      </div>
    </Content>
  </div>
)

const listContainer = css`
  @media only screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
    width: 100%;
    button {
      width: 100%;
      height: auto;
      padding-top: 56.25%;
      background-position: center;
      background-size: 100% 100%;
      background-repeat: none;
      top: 0 !important;
      left: 0 !important;
      position: relative;
      .title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .flex-title {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  };

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr !important;
  }
`

export default Projects
