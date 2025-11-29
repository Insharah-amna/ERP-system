'use client'
import { useState } from "react";
import CustomButton from "@/components/custom/Button"
import CustomInput from "@/components/custom/Input"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [alerts, setalerts] = useState({
    show: false,
    msg: "",
  });

  const onSubmit = async () => {
    if(!email){
      setalerts({ show: true, msg: "Please enter your email." });
      return;
    }
    
    const res = await fetch("http://localhost:3001/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }), 
    });

    const data = await res.json();
    
    if (data) {
      alert('We\'ve sent a password reset link to your email. Please check your inbox.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form className="flex flex-col gap-8 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h3 className="font-semibold text-3xl text-center mb-4">Forgot Password?</h3>
      
        <CustomInput
          id='email'
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          alerts={alerts}
        />

        <CustomButton
          buttonText='Reset my password'
          onClick={onSubmit}
        />

        <p className="text-sm text-gray-700 text-center">
          If email exists, you’ll receive reset instructions.
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
