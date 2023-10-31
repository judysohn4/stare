import React from 'react'
import {Link} from 'react-router-dom'
import Comments from "./Comments";
import main from "./assets/bostock.jpeg";
import roe from "./assets/roe.jpeg";
import gray from "./assets/gray.jpeg"

const Home = () => {
    return (
        <div className = "h-screen bg-white">

          <div className= "home flex text-black h-full bg-white justify-between ">
            <div className= "homepage flex flex-col w-4/5 pr-12">
            <div className= "news w-full flex flex-col p-4">
                    <div className= "text-4xl">NEWS</div> <br/>
                    <div className= "newsdiv flex w-full">
                    <div className= "newssection w-3/5">
                        <div className= "main flex flex-col hover:scale-105 hover:text-gray">
                            <div>
                                <Link to = {"/bostock"} className = "images" href = "bostock.html"><img className = "images" src = {main}/></Link>
                            </div>
                            <div className= "text-3xl pl-2 pr-2 pt-2 pb-1 "> <a href = "bostock.html">Bostock v. Clayton County</a></div>
                            <div className= "pl-2 pr-2 pb-2 pt-1"><Link to = {"/bostock"}>A look into the landmark decision that stood for LGBTQ+ rights. </Link></div>
                        </div>
                    </div>
                    <div className= "articles flex flex-col w-2/5 gap-5 ml-7">
                        <div className= "article flex w-full hover:scale-105 hover:underline">
                            <Link to = {"/roe"}><div className= "flex">
                                <img src = {roe} className= "w-2/5 mr-5 "/>
                                <div className= "flex flex-col w-3/5 justify-center">
                                    <div className= "text-lg">
                                        Roe v. Wade 
                                    </div>
                                    <div className= "text-sm">
                                        With the overturn of the 1973 Supereme Court case...
                                    </div>
                                </div>
                            </div></Link>
                        </div>

                        <div className= "article flex hover:scale-105 hover:underline">
                            <Link to = {"/affirmative"}><div className= "flex">
                                <img src = {gray} className= "w-2/5 mr-5 "/>
                                <div className= "flex flex-col w-3/5 justify-center">
                                    <div className= "text-lg">
                                        Affirmative Action
                                    </div>
                                    <div className= "text-sm">
                                        Affirmative action or not? Catching up with what teens should know...
                                    </div>
                                </div>
                            </div></Link>
                        </div>

                        <div className= "article flex hover:scale-105 hover:underline">
                           <Link to = {"/roe"}><div className= "flex">
                                <img src = {roe} className= "w-2/5 mr-5"/>
                                <div className= "flex flex-col w-3/5 justify-center">
                                    <div className= "text-lg">
                                        Roe v. Wade
                                    </div>
                                    <div className= "text-sm">
                                        With the overturn of the 1973 Supereme Court case...
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                    </div>
                </div>

                <br/><hr className= "w-full border-black"/><br/>

                <div class = "teen w-full flex flex-col p-4">
                    <div class = "text-4xl">Teens Talk</div> <br/>
                    <div>We need your contribution! Please submit your writings realted related to politics and or social activism. </div>
                </div>


            </div>
            <div class = "side w-1/5">

                    <br/>
                </div>
          </div>

          <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded flex justify-between">
        <div class="grid grid-flow-col gap-4">
          <Link to = {"/about"} className="link link-hover">About us</Link> 
          <a class="link link-hover" href = "https://mail.google.com/mail/?view=cm&fs=1&to=staredecisis12@gmail.com&su=" target="_blank">Contact</a> 
        </div> 
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href = "https://twitter.com/jaimieechun?ref_src=twsrc%5Etfw" target = "_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" style={{fill:"#f2d2cb;"}}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
            <a href = "https://www.tiktok.com/@stare.decisis?is_from_webapp=1&sender_device=pc" target = "_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"
                style={{fill:"#ffffff;"}}>
                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg></a> 
            <a href = "https://www.instagram.com/stare_decisis12/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64"
                style={{fill:"#ffffff;"}}>
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                </svg></a>
          </div>
        </div> 
      </footer>
      <div className="toast toast-end mb-6">
            <div className="alert alert-info flex justify-center">
                <Link to ={"/contribute"}><button>Contribute to our website</button></Link>
            </div>
            <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/episode/40a6VlkQRo1squ9MoNi6Ip?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className= "podcast"></iframe>
    </div>

        </div> 
    )
}

export default Home