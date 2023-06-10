import React from "react";
import Navbar from "../etc/Navbar";
import CardMovie from "../etc/CardMovie";
import CardDetail from "../etc/CardDetail";
import Movie from "../module/Movie";
import { withRouter } from "../etc/WithRouter";
import ModalHapus from "../etc/ModalHapus";
import { Link } from "react-router-dom";
import ModalEdit from "../etc/ModalEdit";

class Detail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenEdit: false,
            list_movie: [],
            data_movie: {
                id: "",
                title: "",
                desc: "",
                genre: "",
                year: "",
                imagePath: "",
            },
            data: [],
            redirect: '/' 
        }
        this.getMovieId = this.getMovieId.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.closeModalHapus = this.closeModalHapus.bind(this);
        this.closeModalEdit = this.closeModalEdit.bind(this);
        this.openModalHapus = this.openModalHapus.bind(this);
        this.openModalEdit = this.openModalEdit.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    getMovie() {
        Movie.getMovie().then((result: any) => {
            const component = result.data.map((el: { title: any; imagePath: any }) => {
                return (
                    <div className="col m-0 p-0">
                        <CardMovie title={el.title} img={el.imagePath} />
                    </div>
                )
            })
            this.setState({
                list_movie: component
            })
        });
    }

    getMovieId() {
        const dataMovie = this.props.location.state;
        // this.setState({
        //     data_movie: dataMovie
        // })
        Movie.getMovieById({id: this.props.location.state.data.id}).then((result:any) => {
            if(result.response === true) {
                console.log(result);
                this.setState({
                    data_movie: {
                        id: result.data[0].id,
                        title: result.data[0].title,
                        desc: result.data[0].desc,
                        genre: result.data[0].genre,
                        year: result.data[0].year,
                        imagePath: result.data[0].imagePath
                    }
                })
            }   
        })
    }

    deleteMovie() {
        Movie.deleteMovie(this.state.data_movie.id).then((result: any) => {
            if(result.response === true) {
                this.props.navigate(this.state.redirect);
            }
        })
    }

    handleDelete(i: any) {
        const fil = this.state.deleteMovie.filter((index: any) => index ==! i);

        this.setState({
            deleteMovie: fil
        })
    }


    componentDidMount(): void {
        this.getMovie();
        this.getMovieId();
    }

    openModalHapus() {
        const id = this.state.data_movie;
        console.log(id);
        this.setState({
            isOpen: true,
            id: id
        })
    }

    closeModalHapus() {
        this.setState({
            isOpen: false,
        })
    }

    closeModalEdit() {
        this.setState({
            isOpenEdit: false,
        })
    }

    openModalEdit() {
        const data = this.state.data_movie;
        console.log(data)
        this.setState({
            isOpenEdit: true,
            id: data
        })
    }



    render(): React.ReactNode {
        return (
            <>
                <Navbar />
                <div className="container mt-5">
                    <div className="d-flex">
                        <div className="col-auto">
                            <CardDetail img={this.state.data_movie.imagePath} />
                        </div>
                        <div className="ms-4">
                            <p className="fs-2 text-white"><b>{this.state.data_movie.title}</b></p>
                            <p className="text-white">{this.state.data_movie.year} . {this.state.data_movie.genre}</p>
                            <p className="fs-5 text-white">Description</p>
                            <p style={{ color: "#737174" }}>{this.state.data_movie.desc}</p>
                            <div className="d-flex align-self-end text-white text-end">
                                <button className="btn btn-primary fs-7" onClick={this.openModalEdit}>EDIT</button>
                                <button className="btn btn-danger ms-2 fs-7" onClick={this.openModalHapus}>HAPUS</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-white fs-5 mt-3">Movies For You</p>
                    <div className="d-flex scroll-card">
                        <div className="d-flex">
                            {this.state.list_movie}
                        </div>
                    </div>
                </div>
                <ModalEdit openEdit={this.state.isOpenEdit} closeModal={this.closeModalEdit} title={this.state.data_movie.title} desc={this.state.data_movie.desc} genre={this.state.data_movie.genre} year={this.state.data_movie.year}  id={this.state.data_movie.id}/>
                <ModalHapus open={this.state.isOpen} closeModal={this.closeModalHapus} hapus={this.deleteMovie}/>
            </>
        )
    }

}

export default withRouter(Detail);