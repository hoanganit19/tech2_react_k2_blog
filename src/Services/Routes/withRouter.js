import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const withRouter = (ParentComponent) => (props) => {
    
    const params = useParams();

    const searchParams = useSearchParams();  //array

    const navigate = useNavigate();

    return <ParentComponent {...props} params={params} search={searchParams} navigate={navigate}/>;
}

export default withRouter;
