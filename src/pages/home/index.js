import React from "react"

import BusinessHeader from "./business.home"
import Consumers from "./business.consumers"
import Integration from "./business.intergration"

import Email from "./business.email"

import Advertisement from "./business.advertisment"
import { Container } from "react-bootstrap"

const Home =()=>{
    return(
        <div>
            <BusinessHeader />

            <Consumers />

            <Advertisement />

            <Integration />

            <Email />
        </div>
    )
}

export default Home