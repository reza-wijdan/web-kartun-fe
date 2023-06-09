import axios from "../../api/axios";

class Movie {
    static async getMovie() {
        return new Promise((res, rej) => {
            axios({
                method: "GET",
                url: "/getMovie"
            }).then((result) => {
                res({response: true, data: result.data});
            })
        })
    }

    static async getMovieById(data: {id: any}) {
        return new Promise((res, rej) => {
            axios({
                method: "POST",
                url: `/detailMovie`,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data"           
                },
                data: data
            }).then((result) => {
                res({response: true, data: result.data});
            })
        })
    }

    static async movieSearch(query:  any) {
        return new Promise((res, rej) => {
            axios({
                method: "GET",
                url: `/movie/search?q=${query}`,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data"           
                },
                data: JSON.stringify({query})
            }).then((result) => {
                res({response: true, data: result.data})
            })
        })
    }
}

export default Movie;