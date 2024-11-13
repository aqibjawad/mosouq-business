import React from "react";

import PriceHeader from "./price.header";
import PricingWork from "./pricing.work";
import { Container } from "react-bootstrap";
import ComparePricing from "../../components/comparePricing";
import FAQ from "../FAQ";


const Price =()=>{
    return(
        <Container fluid  className="p-0 py-5" >
            <PriceHeader />
            <ComparePricing/>
            <PricingWork />
            <FAQ/>
        </Container>
    )
}

export default Price;