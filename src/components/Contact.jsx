import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form >
            <input type="text" placeholder='Full name' required/>
            <input type="email" placeholder='Your mail' required/>
            <textarea name="message" placeholder='write here...' cols="30" rows="10"></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact