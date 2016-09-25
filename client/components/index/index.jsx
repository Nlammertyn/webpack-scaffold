import React from "react";
import TestComponent from "./test.jsx";

export default class IndexComponent extends React.Component{

    render(){
        return(
            <section>
                <h2>Webpack scaffold</h2>

                <div className="test-component">
                    <TestComponent/>
                </div>
            </section>
        );
    }
};
