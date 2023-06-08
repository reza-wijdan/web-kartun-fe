import React from "react";
import Navbar from "../etc/Navbar";
import Carousel from "../etc/Carousel";
import CardMovie from "../etc/CardMovie";
import Movie from "../module/Movie";

class Dashboard extends React.Component <any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            list_movie: []
        }

        this.getMovie = this.getMovie.bind(this);
    }

    getMovie() {
        Movie.getMovie().then((result:any) => {
            const component = result.data.map((el: { title: any; imagePath:any, id: any }) => {
                return (
                    <div className="col m-0 p-0">
                        <CardMovie title={el.title} img={el.imagePath} data={el} />
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
        return (
            <>
                <div className="">
                    <div className="fixed-top">
                        <Navbar />
                    </div>
                    <div className="container" style={{ paddingTop:"60px" }}>
                        <Carousel />
                        <p className="pt-3">Movies For You</p>
                        <div className="row row-cols-auto justify-content-center">
                            {this.state.list_movie}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;
