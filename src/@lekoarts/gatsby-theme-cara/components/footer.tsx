/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      Contact <a href="mailto:stefana.dilova@gmail.com">Stefana Dilova</a>
      <br />
      <br />
      All copyrights for the English text quoted in the video belong to Geraldine Harcourt, 2018.
      <br />
      All copyrights for the Japanese text quoted in the video as sound belong to Yuko Tsushima.
      <br />
      <br />
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  )
}

export default Footer
