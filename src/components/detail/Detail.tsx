import React from "react";
import Navbar from "../etc/Navbar";
import CardMovie from "../etc/CardMovie";
import CardDetail from "../etc/CardDetail";
import Movie from "../module/Movie";

class Detail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            list_movie: []
        }

        this.getMovie = this.getMovie.bind(this);
    }

    getMovie() {
        Movie.getMovie().then((result:any) => {
            const component = result.data.map((el: { title: any; imagePath:any }) => {
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
    componentDidMount(): void {
        this.getMovie();
    }

    render(): React.ReactNode {
        return(
            <>
                <Navbar />
                <div className="container mt-5">
                    <div className="d-flex">
                        <div className="col-auto">
                            <CardDetail />
                        </div>
                        <div className="ms-4">
                            <p className="fs-2 text-white"><b>Marsha and the beer</b></p>
                            <p className="text-white">2021 . Comedy</p>
                            <p className="fs-5 text-white">Description</p>
                            <p style={{ color: "#737174" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto beatae unde dolores incidunt veniam inventore corrupti, quis deleniti cupiditate aliquid possimus sequi, doloremque doloribus, consequuntur delectus nihil sit illo quod exercitationem harum obcaecati autem mollitia repudiandae. Saepe, earum illo repudiandae provident consectetur, in a quae quo eaque autem pariatur.</p>
                            <div className="d-flex align-self-end text-white text-end">
                                <button className="btn btn-primary fs-7">EDIT</button>
                                <button className="btn btn-danger ms-2 fs-7">HAPUS</button>                            
                            </div>
                        </div>
                    </div>
                    <p className="text-white fs-5 mt-3">Movies For You</p>
                    <div className="scroll-card">
                        <div className="d-flex">
                           {this.state.list_movie}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Detail;