/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from 'emotion'
import ProjectList from "./project-list"
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = () => {
  return (
    <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `full`], backgroundColor: '#3c3c3c', padding: '5rem 2rem' }}>
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
          <ProjectList />
        </div>
      </div>
    </div>
  )
}

const listContainer = css`
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 1fr;
    width: 70%;
    button {
      width: 100%;
      height: auto;
      padding-top: 45%;
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
          font-weight: 300;
          font-family: 'Cormorant Garamond', serif;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  };
  @media only screen and (max-width: 1600px) {
    grid-template-columns: 1fr;
    width: 100%;
    button {
      width: 100%;
      height: auto;
      padding-top: 45%;
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
          font-weight: 300;
          font-family: 'Cormorant Garamond', serif;
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
