import React from "react";
import SingleCard from "./SingleCard"

const MainAboutCard = ({data}) => {
    console.log(data)
    return <div>
        {
        data.map((item , index) => {
            const {title , price , info , quantite , outOfStock} = item
            console.log(outOfStock);
            return(
                <SingleCard title = {title} price = {price} info = {info} quantite = {quantite} outOfStock = {outOfStock} key={index} />
            )
        })
    }
    </div>
}

export default MainAboutCard