import React from "react";

class Loading extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                {this.props.show === true ? <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span> : <></>}
            </>
        )
    }
}

export default Loading;