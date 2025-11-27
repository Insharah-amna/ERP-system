'use client'
import { useState } from "react";
import CustomButton from "../custom/Button"
import CustomInput from "../custom/Input"

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [alertmsg, setAlertmsg] = useState(false);

  const onSubmit = (e) => {
    if(password === '' || cnfrmPassword === ''){
      setAlertmsg(true);
      e.preventDefault();
      return;
    }

    if(password !== cnfrmPassword){
      setAlertmsg(true);
      e.preventDefault();
      return;
    }
    
    console.log('Reset password', password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form onSubmit={onSubmit} className="flex flex-col gap-10 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h3 className="font-semibold text-3xl text-center">Reset Password</h3>
      
        <div className="flex flex-col gap-2">
          <CustomInput
            id='password'
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            alertMessage={alertmsg}
          />

          <CustomInput
            id='password'
            type="password"
            placeholder="Confirm password"
            value={cnfrmPassword}
            onChange={(e) => setCnfrmPassword(e.target.value)}
            alertMessage={alertmsg}
          />
        </div>

        <CustomButton
          buttonText='Reset my password'
          type="submit"
        />
      </form>
    </div>
  )
}

export default ResetPassword;
