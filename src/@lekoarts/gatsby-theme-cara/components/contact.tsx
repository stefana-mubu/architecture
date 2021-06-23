/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from 'emotion'
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"

const Contact = () => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `full`], textAlign: `left` }}>
    <div className={wrapper}>
      <Footer />
    </div>
  </div>
)

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0rem 2rem 1rem;
`

export default Contact
