import React from "react";
import {render} from "react-dom";
import classNames  from "classnames";
import _ from "underscore";

var templateComponent = React.createClass({

    // Props
    propTypes: {
        prop1: React.PropTypes.func,
        prop2: React.PropTypes.bool,
        prop3: React.PropTypes.string,
        prop4: React.PropTypes.array,
        prop5: React.PropTypes.number,
        prop6: React.PropTypes.object,
    },
    getDefaultProps: function(){
        return{
            prop1: function(){},
            prop2: true,
            prop3: "test",
        }
    },

    // State
    getInitialState: function(){
        return {
            testState: true,
        }
    },

    // Created
    componentWillMount: function(){
        var t = this;
    },

    // Rendered
    componentDidMount: function(){

    },

    // Events
    events: {
        testHandler: function(e){
            this.props.parentActions.getBreadcrumbs();
        }
    },

    // Render
    render(){
        var t = this;

        var testClasses = classNames({
            "test-class": true,
            "test-class2": false
        }, "test-class3");

        // HTML
        return(
            <div className={testClasses} onClick={t.events.testHandler.bind(this)}>
                Test: {this.props.data.test}
            </div>
        );
    }
});

// Export
export default templateComponent;
