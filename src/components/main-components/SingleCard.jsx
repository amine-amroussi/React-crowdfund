import React from 'react'

const SingleCard = ({title , price , info , quantite , outOfStock }) => {
    console.log(outOfStock);
    return (
        <article className={ `${outOfStock === true ? "card out-stock" : "card"}`} >
            <div className="card-header" >
                <h3 className="card-title" >
                    {title}
                </h3>
                <h4 className="card-price" >Pledge ${price} or more</h4>
            </div>
            <p className="paragraphe" >
            {info}
            </p>
            <div className="card-footer" >
                <div className="qtt" >
                    <h2> {quantite} </h2>
                    <span className="subtitle" >left</span>
                </div>
                <button className="btn green " >
                    Select Reward
                </button>
            </div>
        </article>
    )
}

export default SingleCard
