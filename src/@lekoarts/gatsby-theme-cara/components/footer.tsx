/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      Contact <a href="mailto:s.dilova@udk-berlin.de">Stefana Dilova</a>
      <br />
      <br />
      The project was carried out at the Faculty of Architecture of the Berlin University of Arts
      <br />
      and was supervised by the following professors:
      <br />
      <br />
      Prof. Dr. Markus Bader
      <br />
      Prof. Dipl. -Ing. Enrique Sobejano
      <br />
      Prof. Dr. Matthias Noell
      <br />
      Prof. Dr. Norbert Palz
      <br />
      <br />
      June 16, 2020
      <br />
      Berlin
      <br />
      <br />
      All copyrights for the English text shown in the video belong to Geraldine Harcourt, 2018.
      <br />
      All copyrights for the Japanese text read and integrated in the video as sound belong to Yuko Tsushima.
      <br />
      <br />
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </Box>
  )
}

export default Footer
