import React , {useState} from "react";
import MainAboutCard from './main-about-card'
import cardData from "../../card-data"


const MainAbout = () => {
    
    const [card , setCard] = useState(cardData)
    return (
        <section className="section about" >
            <h2 className="about-title" >About this project</h2>
            <p className="paragraphe" >Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className="paragraphe" >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            <MainAboutCard data = {card} />

        </section>
    )
}

export default MainAbout