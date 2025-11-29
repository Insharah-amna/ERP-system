'use client'
import { useState } from "react";
import CustomButton from "@/components/custom/Button"
import CustomInput from "@/components/custom/Input"

const ResetPassword = ({ email }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerts, setalerts] = useState({
    show: false,
    msg: "",
  });

  const onSubmit = async () => {
    if (!password || !confirmPassword) {
      setalerts({ show: true, msg: "Please fill all fields." });
      return;
    }

    if (password !== confirmPassword) {
      setalerts({ show: true, msg: "Passwords do not match." });
      return;
    }

    if (password.length < 6) {
      setalerts({ show: true, msg: "Password must be at least 6 digits long." });
      return;
    }

    const res = await fetch(`http://localhost:3001/auth/reset-password/${email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    
    if (data) {
      alert(data.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form className="flex flex-col gap-10 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h3 className="font-semibold text-3xl text-center">Reset Password</h3>
      
        <div className="flex flex-col gap-2">
          <CustomInput
            id='password'
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            alerts={alerts}
          />

          <CustomInput
            id='password'
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            alerts={alerts}
          />
        </div>

        <CustomButton
          buttonText='Reset my password'
          onClick={onSubmit} 
        />
      </form>
    </div>
  )
}

export default ResetPassword;
