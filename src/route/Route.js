import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import AddInfo from "../component/AddInfo";
import ViewInfo from "../component/ViewInfo";


class Routes extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/addinfo" component={AddInfo}/>
                <Route path="/viewinfo" component={ViewInfo}/>
            </React.Fragment>
        )
    }
}

export default Routes;