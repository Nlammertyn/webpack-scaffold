import "sass/app.scss";

import React from "react";
import {render} from "react-dom";
import WatchJS from "watchjs";
import DataTree from "./lib/data.js"
import Index from "components/index/index";

// Initial render
render(<Index data={DataTree}/>, document.getElementById("react-root"));

// On change
WatchJS.watch(DataTree, function(){
    render(<Index data={DataTree}/>, document.getElementById("react-root"));
});
