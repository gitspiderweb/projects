import React from "react";

const RowStandard = ({ section, children }) => {


    return (
        <div className={section}>
            <div className="row-standard">
                {children}
            </div>
        </div>
    );
};

export default RowStandard;