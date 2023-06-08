import React from "react";
import Navbar from "../etc/Navbar";
import CardMovie from "../etc/CardMovie";
import CardDetail from "../etc/CardDetail";
import Movie from "../module/Movie";
import { withRouter } from "../etc/WithRouter";

class Detail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            list_movie: [],
            data_movie: {
                id: "",
                title: "",
            }
        }
        this.getMovieById = this.getMovieById.bind(this);
        this.getMovie = this.getMovie.bind(this);
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

    getMovieById() {
        const dataMovie = this.props.location.state.data;
        this.setState({
            data_movie: dataMovie
        })
    }

    componentDidMount(): void {
        this.getMovie();
        this.getMovieById();
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
                                <button className="btn btn-primary fs-7">EDIT</button>
                                <button className="btn btn-danger ms-2 fs-7">HAPUS</button>
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
            </>
        )
    }

}

export default withRouter(Detail);