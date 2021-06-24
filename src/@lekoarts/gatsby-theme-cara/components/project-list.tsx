/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { cx, css, keyframes } from 'emotion'
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const ProjectList = () => {
  return (
    <React.Fragment>
      <div className={container}>
        <ProjectCard
          className={cx(l, nine, 'main')}
          title="The Poetics of Home"
          link="https://www.youtube.com/embed/E5dEtS_eEKo"
        >
          The Top Floor of Fujino Building No. 3
        </ProjectCard>
      </div>
      <h2 className={headline}>Film Chapters</h2>
      <div
        sx={{
          display: `grid`,
          gridGap: [4, 4, 4, 4],
          gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`, `repeat(2, 1fr)`],
          h2: { gridColumn: `-1/1` },
        }}
      >
        <ProjectCard
          className={cx(one, image)}
          title="The Top Floor of Fujino Building No. 3"
          link="https://www.youtube.com/embed/15i0FbqJBTA"
        />
        <ProjectCard
          className={cx(two, image)}
          title="Sound of Water"
          link="https://www.youtube.com/embed/zhkvVQmLQRE"
        />
        <ProjectCard
          className={cx(three, image)}
          title="An Intruder"
          link="https://www.youtube.com/embed/j4beSSSVhSE"
        />
        <ProjectCard
          className={cx(four, image)}
          title="The Blue Mesh"
          link="https://www.youtube.com/embed/784FnUcxMZ8"
        />
        <ProjectCard
          className={cx(five, image)}
          title="The Red Glow"
          link="https://www.youtube.com/embed/eGzdcVYwBOs"
        />
        <ProjectCard
          className={cx(six, image)}
          title="The Secret Chamber"
          link="https://www.youtube.com/embed/59RJ_IA2378"
        />
        <ProjectCard
          className={cx(seven, image)}
          title="Burbling of Water"
          link="https://www.youtube.com/embed/WzaSL5eAWJk"
        />
        <ProjectCard
          className={cx(eight, image)}
          title="Reddish Light"
          link="https://www.youtube.com/embed/4lJwHchMyS4"
        />
      </div>
    </React.Fragment>
  )
}

const headline = css`
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  color: #fff;
  margin: 2rem 0;
`

const container = css`
  display: flex;
  justify-content: center;
  width: 100%;
`

const xs = css`
  width: 285px;
  height: 160px;
`

const s = css`
  width: 460px;
  height: 260px;
`

const m = css`
  width: 550px;
  height: 310px;
`

const l = css`
  width: 100%;
  height: 915px;
  background-size: cover;
`

const image = css`
  width: 100%;
  padding: 4rem;
  background-size: cover;
  display: flex;
  flex: 1 1 auto;
`

const two = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-sound-of-water.jpg);
`

const six = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-secret-chamber.jpg);
`

const eight = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-reddish-light.jpg);
`

const three = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-an-intruder.jpg);
`

const five = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-red-glow.jpg);
`

const four = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-blue-mesh.jpg);
`

const nine = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-fujino-tower-no-3.jpg);
`

const seven = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-burbling-water.jpg);
`

const one = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-fujino-tower-no-3-2.jpg);
`

const card = css`
  animation: up-down1 4s ease-in-out infinite alternate;
  @keyframes up-down1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px);
    }
  }
`

const cardAlt = css`
  animation: up-down 3.5s ease-in-out infinite alternate;
  @keyframes up-down {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
`

const cardThird = css`
  animation: up-down 5s ease-in-out infinite alternate;
  @keyframes up-down {
    from {
      transform: translateY(-10);
    }
    to {
      transform: translateY(20px);
    }
  }
`

const scaledDown = css`
  transform: scale(0.95);
`

const scaledUp = css`
  transform: scale(1.05);
`

const skewed = css`
  transform: skew(5deg);
`

const skewedNeg = css`
  transform: skew(-5deg);
`

const small = css`
  top: 10px;
  left: 5px;
  width: 300px;
  height: 200px;
`

const medium = css`
  top: 15px;
  left: 20px;
  width: 325px;
  height: 220px;
`

const normal = css`
  top: 20px;
  left: -5px;
  width: 330px;
  height: 250px;
`

const big = css`
  top: 20px;
  width: 350px;
  height: 270px;
`

export default ProjectList
