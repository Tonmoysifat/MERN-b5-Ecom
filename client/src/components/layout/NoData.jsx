import React from 'react';
import noDataImg from "../../assets/images/no-results.png"
const NoData = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <img alt="nodataImg" className="w-75" src={noDataImg}/>
                    <h2>No Data Found</h2>
                </div>
            </div>
        </div>
    );
};

export default NoData;