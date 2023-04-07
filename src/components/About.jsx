import React from 'react'
import aboutimage from "../images/about.png"

function About() {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Consequatur voluptatem facere aliquam optio delectus suscipit sequi earum, 
                    dignissimos odit, voluptas harum deserunt? Fuga, commodi quaerat.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About