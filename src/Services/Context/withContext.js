import React, {Component} from "react";
import { StateContext } from "./StateProvider";

function withContext(ParentComponent){
    return class extends Component{
        constructor(props){
            super(props);
        }

        render(){
            return <StateContext.Consumer>
                {(context) => <ParentComponent {...this.props} store={context} />}
            </StateContext.Consumer>
        }
    }
}

export default withContext;