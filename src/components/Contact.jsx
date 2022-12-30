import React from 'react'

const contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Abc' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='xyz@gamail.com' />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" placeholder='tell us your query...' />
                </div>
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}

export default contact;