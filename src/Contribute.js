import React from 'react'
import cont from "./assets/cont.jpg"

const Contribute = () => {
    return (
        <div className = "flex flex-col items-center bg-white">
            <div className = "text-3xl text-black mt-5">Contribute to our Website</div>
            <div className = "mt-5"><a className = "text-2xl text-gray-500 link hover:text-gray" href = "https://docs.google.com/forms/d/e/1FAIpQLScOjWWmW6hw4byMYUoHQmlSTVkrmiEspEKOXnj05sE5LLsfyA/viewform?usp=sf_link"><p className = "hover:scale-105 hover:underline hover:text-gray-500">link to the google forms</p></a></div>
            <div className="card cardside text-black lg:card-side bg-base-100 shadow-xl w-3/4 h-3/4 m-12">
                <figure><img src={cont} alt="writers needed"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Google Forms</h2>
                    <p>We need writers and or illustrators for our website!</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">google forms</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contribute