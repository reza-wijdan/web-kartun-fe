import React from "react";
import { Button, Modal } from "react-bootstrap";
import Movie from "../module/Movie";

class ModalAdd extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            data_movie : {
                title: "",
                desc: "",
                genre: "",
                year: "",
                imagePath: ""
            }
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSimpan = this.handleSimpan.bind(this);
        this.handleUploadInput = this.handleUploadInput.bind(this);
    }

    handleTitle(e: any) {
        this.setState((prevState: { data_movie: any; }) => ({
            data_movie: {
                ...prevState.data_movie,
                title: e.target.value
            }
        }))
    }
    handleDesc(e: any) {
        this.setState((prevState: { data_movie: any; }) => ({
            data_movie: {
                ...prevState.data_movie,
                desc: e.target.value
            }
        }))
    }
    handleGenre(e: any) {
        this.setState((prevState: { data_movie: any; }) => ({
            data_movie: {
                ...prevState.data_movie,
                genre: e.target.value
            }
        }))
    }
    handleYear(e: any) {
        this.setState((prevState: { data_movie: any; }) => ({
            data_movie: {
                ...prevState.data_movie,
                year: e.target.value
            }
        }))
    }
    handleImage(e: any) {
        const file = e.target.files[0].names;
        if (file && file.type.startsWith('image/jpeg')) {
            this.setState((prevState: {data_movie: any;}) => ({
                data_movie: {
                    ...prevState.data_movie,
                    imagePath: file
                }
            }));
          } else {
            // Invalid file type, handle error if needed
            console.error('Invalid file type. Please select an image file.');
          }
    }

    handleUploadInput(e:any) {
        console.log(e.target.files[0]);
        this.setState((prevState: { data_movie: any; }) => ({
            data_movie: {
                ...prevState.data_movie,
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

        Movie.addMovie(data).then((result: any) => {
            console.log(result);
        })
    }

    closeModal() {
        this.setState({
            isOpen: false,
        })
    }

    openModal() {
        this.setState({
            isOpen: true
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
                            TAMBAH DATA
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="m-3">
                        <form action="">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" onChange={this.handleTitle} value={this.state.data_movie.title} />
                            <label htmlFor="" className="mt-2">Deskripsi</label>
                            <textarea className="form-control" onChange={this.handleDesc} value={this.state.data_movie.desc} />
                            <label htmlFor="" className="mt-2">Genre</label>
                            <input type="text" className="form-control" onChange={this.handleGenre} value={this.state.data_movie.genre} />
                            <label htmlFor="" className="mt-2">Year</label>
                            <input type="text" className="form-control" onChange={this.handleYear} value={this.state.data_movie.year} />
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

export default ModalAdd;