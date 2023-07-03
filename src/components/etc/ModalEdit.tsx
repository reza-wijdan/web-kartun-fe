import React from "react";
import { Button, Modal } from "react-bootstrap";
import Movie from "../module/Movie";

class ModalEdit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenEdit: false,
            data_movie : {
                id:  "",
                title: "",
                desc: "",
                genre: "",
                year: "",
                imagePath: ""
            },
            loading: false
        }
        
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleSimpan = this.handleSimpan.bind(this);
        this.handleUploadInput = this.handleUploadInput.bind(this);
    }

    handleTitle(e: any) {
        this.setState((prevState: any) => ({
            data_movie: {
                ...prevState.data_movie.title,
                title: e.target.value
            }
            // const newData = prevState.data_movie.title !== this.state.data_movie.title ? prevState.data_movie.title : "";
            // return {
            //     title: newData + e.target.value
            // }
        }))
    }
    handleDesc(e: any) {
        this.setState((prevState: any) => ({
            data_movie: {
                ...prevState.data_movie.desc,
                desc: e.target.value
            }
        }))
    }
    handleGenre(e: any) {
        this.setState((prevState: any) => ({
            data_movie: {
                ...prevState.data_movie.genre,
                genre: e.target.value
            }
        }))
    }
    handleYear(e: any) {
        this.setState((prevState: any) => ({
            data_movie: {
                ...prevState.data_movie.year,
                year: e.target.value
            }
        }))
    }

    handleUploadInput(e:any) {
        console.log(e.target.files[0]);
        this.setState((prevState: any) => ({
            data_movie: {
                ...prevState.data_movie.imagePath,
                imagePath: e.target.files[0]
            }
        }));
    }

    handleSimpan() {
        const data = {
            title: this.state.data_movie.title,
            desc: this.state.data_movie.desc,
            genre: this.state.data_movie.genre,
            year: this.state.data_movie.year,
            imagePath: this.state.data_movie.imagePath,
        }
        console.log(data);
        Movie.editMovie(this.props.id, data).then((result: any) => {
            if(result.response === true) {
                this.props.closeModal();
                window.location.reload();
            }
        })
    }

    closeModal() {
        this.setState({
            isOpenEdit: false,
        })
    }

    openModal() {
        this.setState({
            isOpenEdit: true
        })
    }

    render(): React.ReactNode {
        return(
            <>
                <Modal
                    show={this.props.openEdit}
                    dialogClassName="w-50"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
                            EDIT DATA
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="m-3">
                        <form action="">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" onChange={this.handleTitle} defaultValue={this.props.title} />
                            <label htmlFor="" className="mt-2">Deskripsi</label>
                            <textarea className="form-control" onChange={this.handleDesc} defaultValue={this.props.desc} />
                            <label htmlFor="" className="mt-2">Genre</label>
                            <input type="text" className="form-control" onChange={this.handleGenre} defaultValue={this.props.genre} />
                            <label htmlFor="" className="mt-2">Year</label>
                            <input type="text" className="form-control" onChange={this.handleYear} defaultValue={this.props.year} />
                            <label htmlFor="" className="mt-2">Image</label>
                            <input type="file" accept="image/*" name="file-input" className="form-control" onChange={this.handleUploadInput} />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal} variant="secondary">Close</Button>
                        <Button onClick={this.handleSimpan}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalEdit;