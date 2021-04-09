import React from 'react'

const MainInfo = () => {
    return (
        <section className="section main-info" >
            <div className="info-container" >
                <article className="info" >
                    <h2 className="info-title" >$89,914</h2>
                    <p className="subtitle" >
                        of 100,000 backed
                    </p>
                </article>
                <article className="info" >
                    <h2 className="info-title" >5,007</h2>
                    <p className="subtitle" >
                        total backers
                    </p>
                </article>
                <article className="info" >
                    <h2 className="info-title" >56</h2>
                    <p className="subtitle" >
                        days left
                    </p>
                </article>
            </div>
            <div className="progress-bar" >
                <div className="progress" ></div>
            </div>
        </section>
    )
}

export default MainInfo
