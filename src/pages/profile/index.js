import React from "react";

import BusinessProfileHead from "./business.profile";
import BusinessStat from "./business.stats";

const BusinessProfile =()=>{
    return(
        <div style={{ marginTop: "8rem", marginLeft: "3rem", marginRight: "3rem" }}>
            <BusinessProfileHead />

            <div className="mt-5">
                <BusinessStat />
            </div>
        </div>
    )
}

export default BusinessProfile