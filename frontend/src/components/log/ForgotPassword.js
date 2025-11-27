'use client'
import { useState } from "react";
import CustomButton from "../custom/Button"
import CustomInput from "../custom/Input"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [alertmsg, setAlertmsg] = useState(false);

  const onSubmitClicked = (e) => {
    if(email === ''){
      setAlertmsg(true);
      e.preventDefault();
      return;
    }
    
    console.log('Reset password clicked', email);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form onSubmit={onSubmitClicked} className="flex flex-col gap-8 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h3 className="font-semibold text-3xl text-center mb-4">Forgot Password?</h3>
      
        <CustomInput
          id='email'
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          alertMessage={alertmsg}
        />

        <CustomButton
          buttonText='Reset my password'
          type="submit"
        />

        <p className="text-sm text-gray-700 text-center">
          If email exists, you’ll receive reset instructions.
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
