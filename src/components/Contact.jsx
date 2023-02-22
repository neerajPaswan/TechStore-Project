import React from 'react';
import {useForm} from 'react-hook-form';


const contact = () => {

const {register,handleSubmit,formState:{error},}=useForm(); 
// const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });




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
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" placeholder='enter password' />
                </div>
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}

export default contact;