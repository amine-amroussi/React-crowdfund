import React from 'react'
import MainHeader from "./main-components/main-header"
import MainInfo from "./main-components/main-info"
import MainAbout from "./main-components/main-about"

export const Main = () => {
    return (
        <main className="main" >
            <MainHeader />
            <MainInfo />
            <MainAbout />
        </main>
    )
}

export default Main