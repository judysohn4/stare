import React from 'react'
import {Link} from 'react-router-dom'
import roe from "./assets/roe.jpeg";
import bostock from "./assets/bostock.jpeg";
import { useState } from 'react';

const News = () => {
    let [list,setList] = useState(["Roe v. Wade","Bostock v. Clayton County","Affirmative Action"]);
    let[link,setLink] = useState(["roe","bostock","affirmative"]);
    let [imr, setImr] = useState([roe,bostock]);
    let [desc, setDesc] = useState(["With the overturn of the 1973 Supreme Court case...","A look into the landmark decision that stood for LGBTQ+ rights.","Affirmative action or not? Catching up with what teens..."]);
    let [news,setNews] = useState([]);

    for(let i = 0; i < list.length; i++) {
        let l = "/"+link[i];
        news[i] = (
            <Link to = {l}><div className="card cardhocard-compact w-96 h-96 shadow-xl hover:scale-105 hover:underline">
            <figure className = "h-1/2"><img src={imr[i]} alt="img"/></figure>
            <div className="card-body">
                <h2 className="card-title">{list[i]}</h2>
                <p>{desc[i]}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div></Link>
        )
    }
    return (
        <div className = "flex flex-col justify-between">
            <div class = "home text-black bg-white h-screen flex justify-center">
            <div className = "grid grid-cols-3 p-5 gap-14 mt-5">
                {news}
        </div>

            </div>


        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded flex justify-between self-end">
            <div class="grid grid-flow-col gap-4">
            <a class="link link-hover">About us</a> 
            <a class="link link-hover">Contact</a> 
            </div> 
            <div>
            <div class="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" style = {{fill:"#f2d2cb;"}}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" style = {{fill:"#f2d2cb;"}}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64"
                    style = {{fill:"#f2d2cb;"}}>
                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg></a>
            </div>
            </div> 
        </footer>

            <div className="toast toast-end mb-8">
                <div className="alert alert-info flex justify-center">
                    <Link to ={"/contribute"}><button>Contribute to our website</button></Link>
                </div>
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/episode/40a6VlkQRo1squ9MoNi6Ip?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className= "podcast mb-8"></iframe>
            </div>

    </div>

    )
}

export default News