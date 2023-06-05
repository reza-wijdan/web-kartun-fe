import React from "react";
import { Link } from "react-router-dom";

class CardMovie extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <Link to='/detail'>
                    <div className="card text-bg-dark me-2 mb-3">
                        <img src={this.props.img} style={{ width: "214px", height: "290px" }} className="card-img" alt="..." />
                        <div className="card-img-overlay" style={{ marginTop: "230px" }}>
                            <h6 className="card-title">{this.props.title}</h6>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default CardMovie;