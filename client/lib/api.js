import DataTree from "./data.js";

var API = {};

API.getBreadcrumbs = function(callback){
    console.log("API.getBreadcrumbs");

    // Do some data fetching

    // Set data object
    DataTree.test = DataTree.test + 1;

    // Run callback
    if(typeof callback == "function"){
        callback("result");
    }
};

export default API;
