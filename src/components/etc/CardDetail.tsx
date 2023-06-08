import React from "react";

class CardDetail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <div className="card text-white me-2 mb-3" style={{ backgroundColor: "black" }}>
                    <img src='./images/img-card.png' style={{ width: "214px", height: "290px" }} className="card-img" alt="..." />
                    <div className="card-img-overlay" style={{ marginTop: "230px" }}>
                        <h6 className="card-title">Nama Movie</h6>
                    </div>
                </div>
            </>
        )
    }
}

export default CardDetail;