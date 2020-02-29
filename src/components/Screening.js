import React, { Component } from 'react';

import { ReactTypeformEmbed } from 'react-typeform-embed';


class Screening extends Component {
    render() {
        return(
            <main className="screeningContainer">
                <h1>screening</h1>
                <p>check the answer that comes closest to how you have felt in the past 7 days</p>
                <ReactTypeformEmbed style={{position: 'relative',height:500}} popup={false} url="https://janeenath.typeform.com/to/uk2ecS" />
            </main>
        )
    }
}



export default Screening;