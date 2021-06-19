/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { cx, css, keyframes } from 'emotion'
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const ProjectList = () => {
  const upAndDowns = [undefined, undefined, undefined, undefined] // [card, cardAlt, cardThird]
  const effects = [undefined, undefined, undefined, undefined] // [scaledDown, scaledUp, skewed, skewedNeg]
  //const sizes = [small, normal, medium, big]

  return (
    <React.Fragment>
      <div className={container}>
        <ProjectCard
          className={cx(five, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
          title="The Top Floor of Fujino Building No. 3"
          link="https://www.youtube.com/embed/E5dEtS_eEKo"
        >
          The Top Floor of Fujino Building No. 3
        </ProjectCard>
      </div>
    </React.Fragment>
  )
}

const container = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  width: 800px;
  height: 515px;
`

const one = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-sound-of-water.jpg);
  background-size: 460px 260px;
  top: -20px;
  left: 45px;
  ${s};
  &.seven {
    background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-secret-chamber.jpg);
    top: -105px;
    left: 65px;
  }
`

const two = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-an-intruder.jpg);
  background-size: 550px 310px;
  ${m};
  &.eight {
    background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-reddish-light.jpg);
    top: -70px;
    left: 20px;
  }
`

const three = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-red-glow.jpg);
  background-size: 285px 160px;
  ${xs};
  top: -30px;
  left: calc(100% - 315px);
`

const four = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-the-blue-mesh.jpg);
  background-size: 550px 310px;
  left: 100px;
  ${m};
`

const five = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-fujino-tower-no-3.jpg);
  background-size: 800px 515px;
  ${l};
`

const six = css`
  background-image: url(/${process.env.IMG_PREFIX || ''}territory-of-light-burbling-water.jpg);
  background-size: 285px 160px;
  ${xs};
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
