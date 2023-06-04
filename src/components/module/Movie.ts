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
}

export default Movie;