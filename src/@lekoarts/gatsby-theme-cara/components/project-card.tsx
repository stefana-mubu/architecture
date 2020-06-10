/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from 'emotion'
import { Modal, Button } from 'react-bootstrap'
import ResponsiveEmbed from 'react-responsive-embed'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ className, link, title, children, bg }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <React.Fragment>
      <button
        className={className}
        onClick={() => setIsModalOpen(true)}
        sx={{
          outline: `none`,
          border: `none`,
          boxShadow: `lg`,
          position: `relative`,
          color: `white`,
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          fontSize: `1.75rem`,
          fontWeight: `500`,
          "&:hover": {
            color: `white !important`,
            boxShadow: `xl`,
          },
        }}
      >
        <div className='title'>
          <span className='flex-title'>{title}</span>
        </div>
      </button>
      <Modal
        className={modalWrapper}
        size="xl"
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' ratio='16:9' allowFullScreen />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

const modalWrapper = css`
  .modal-content {
    border-radius: 0 !important;
    .modal-body {
      padding: 0 !important;
    }
  }
`

export default ProjectCard
