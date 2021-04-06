import React from 'react'
import logo from "../../assets/logo-mastercraft.svg"

const MainHeader = () => {
    return (
        <section className="section main-header">
            <img src={logo} className="maseter-logo" alt="logo" />
            <h1 className="title" >mastercraft Bamboo monitor riser</h1>
            <p className="subtitle" >dolor sit amet consectetur, adipisicing elit. Autem laudantium quis odio!</p>
            <div className="btn-container" >
                <button className="btn green" >
                    Back this project
                </button>
                <button className="btn bookmark" >
                    
                </button>
            </div>
        </section>
    )
}

export default MainHeader
