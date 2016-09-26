import React from "react";
import TestComponent from "./test.jsx";
import WatchJS from "watchjs";
import API from "../../lib/api.js";

var Index = React.createClass({

    // Props
    propTypes: {
        data: React.PropTypes.object,
    },
    getDefaultProps: function(){
        return{

        }
    },

    // Created
    componentWillMount: function(){

    },

    // Rendered
    componentDidMount: function(){

    },

    // Events
    actions: {
        getBreadcrumbs: function(e){
            var t = this;

            API.getBreadcrumbs(function(res){
                console.log(res);
            });
        }
    },

    render(){
        return(
            <section>
                <h2>Webpack scaffold</h2>

                <div className="test-component">
                    <TestComponent data={this.props.data} parentActions={this.actions}/>
                </div>
            </section>
        );
    }
});

export default Index;
