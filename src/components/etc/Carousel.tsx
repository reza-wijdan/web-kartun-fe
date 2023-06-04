import React from "react";

class Carousel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="./images/img-marsha.jpeg" className="d-block w-100" style={{ height:"524.95px" }} alt="..." />
                            <div className="carousel-caption text-left">
                                <h5>Marsha And the Beer</h5>
                                <p>Descriptions Movie</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-blur text-white">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_play.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Play Now</p>
                                        </div>
                                    </button>
                                    <button type="button" className="btn btn-outline-light ms-4">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_wislist.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Watchlist</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/tom-jerry.jpeg" className="d-block w-100" style={{ height:"524.95px" }} alt="..." />
                            <div className="carousel-caption text-left">
                                <h5>Tom and Jerry</h5>
                                <p>Descriptions Movie</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-blur text-white">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_play.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Play Now</p>
                                        </div>
                                    </button>
                                    <button type="button" className="btn btn-outline-light ms-4">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_wislist.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Watchlist</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/spongebob-car.webp" className="d-block w-100" style={{ height:"524.95px" }} alt="..." />
                            <div className="carousel-caption text-left">
                                <h5>Spongebob</h5>
                                <p>Descriptions Movie</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-blur text-white">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_play.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Play Now</p>
                                        </div>
                                    </button>
                                    <button type="button" className="btn btn-outline-light ms-4">
                                        <div className="d-flex align-items-center">
                                            <img src="./images/ic_wislist.png" alt="" />
                                            <p className="p-0 m-0 fs-5 ps-3">Watchlist</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}

export default Carousel;