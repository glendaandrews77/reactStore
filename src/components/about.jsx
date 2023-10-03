import "./about.css";
import logo from "./EndImage.jpg";


function About() {
    return( 
        <div className='about page'>A
            <div>
                <h3>👠KICK'IN UP HEELS👠</h3>
                <hr />
                <img src={logo} alt="EndImage" />
                <h5>Created by:</h5>
                <h1>Gigi Bailey</h1>
                
                <p>WE ARE HERE TO MAKE FEEL SEXY BEAUTIFUL AND CONFIDENT STARTING FROM YOUR HEELS.</p>
            </div>
            <div>
                <p>Its hard to find a pair of heels. We dont just custom make heels, but we aim to please and be sexy at the same. </p>
            </div>
        </div>
    );
}

export default About;

