import { Modal as RModal, ModalHeader, ModalBody } from 'reactstrap'

import { Router } from '../containers'
import { useStore } from '../store'

export const Modal = ({ isOpen, onClose }) => {
  const { pages } = useStore((state) => state.history)

  return (
    <RModal isOpen={isOpen} toggle={onClose} backdrop="static">
      <ModalHeader toggle={onClose}>Router in modal</ModalHeader>
      <ModalBody>
        {/*<Breadcrumbs />*/}
        {/*<hr />*/}
        <Router />
      </ModalBody>
    </RModal>
  )
}
