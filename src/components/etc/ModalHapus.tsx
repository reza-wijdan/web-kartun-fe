import React from "react";
import { Button, Modal } from "react-bootstrap";

class ModalHapus extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.closeModal = this.closeModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({
            isOpen: false,
        })
    }

    openModal() {
        this.setState({
            isOpen: true,
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <Modal
                    show={this.props.open}
                    dialogClassName="w-50"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
                            HAPUS DATA
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-center">
                            <p className="text-center fs-5">Anda yakin ingin menghapus data ini?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal} variant="secondary">Close</Button>
                        <Button onClick={this.props.hapus}>Oke</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalHapus;