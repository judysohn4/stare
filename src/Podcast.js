import React from 'react'
import {Link} from 'react-router-dom'

const Podcast = () => {
    return (
        <div className = "flex flex-col justify-between h-screen">

            <div>
                <div>Podast</div>
                <div className = "flex justify-center p-5">
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/3mdBJB9g91ZE6Od0AXssil?utm_source=generator" width="95%" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
                style={{fill:"#f2d2cb;"}}>
                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg></a> 
            <a href = "https://www.instagram.com/stare_decisis12/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64"
                style={{fill:"#f2d2cb;"}}>
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                </svg></a>
          </div>
        </div> 
      </footer>
      <div className="toast toast-end mb-8">
            <div className="alert alert-info flex justify-center">
                <Link to ={"/contribute"}><button>Contribute to our website</button></Link>
            </div>
            <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/episode/40a6VlkQRo1squ9MoNi6Ip?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className= "podcast"></iframe>
    </div>
        </div>
    )
}

export default Podcast