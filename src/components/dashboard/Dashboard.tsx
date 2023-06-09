import React from "react";
import Navbar from "../etc/Navbar";
import Carousel from "../etc/Carousel";
import CardMovie from "../etc/CardMovie";
import Movie from "../module/Movie";

class Dashboard extends React.Component <any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            search: "",
            list_movie: [],
            data_movie: {
                title: "",
                desc: "",
                genre: "",
                year: "",
                imagePath: "",
            }

        }

        this.getMovie = this.getMovie.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    getMovie() {
        Movie.getMovie().then((result:any) => {
            console.log(result);
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

    handleSearchChange (event: any) {
        const query = event.target.value;
        const data =  Movie.movieSearch(query).then((result: any) => {
            const component = result.data.map((el: {title: any; imagePath:any}) => {
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
        this.setState({ data, query,});
      }
    

    componentDidMount(): void {
        this.getMovie();
    }

    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    //     if(prevState.search !== this.state.search) {
    //         this.getMovie();
    //     }
    // }
    
    render(): React.ReactNode {
        return (
            <>
                <div className="">
                    <div className="fixed-top">
                        <Navbar handleChange={this.handleSearchChange} title={this.state.query}/>
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

