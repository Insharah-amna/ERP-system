'use client'
import Link from 'next/link';
import { useState } from 'react';
import CustomButton from '@/components/custom/Button';
import CustomInput from '@/components/custom/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertmsg, setAlertmsg] = useState(false);

  const onLogin = async (e) => {
    if(username === '' || password === ''){
      setAlertmsg(true);
      e.preventDefault();
      return;
    }

    try {

      const res = await fetch('http://localhost:3001/auth/login', {
        method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ email, password }),
    })
    const data = await res.json();
    console.log(data);
    } catch (e) {
      console.log(e)
  }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form className="flex flex-col gap-7 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h2 className="text-3xl font-semibold text-center">Sign In</h2>

        <CustomInput
          id="username"
          label="Username"
          placeholder="Username"
          className="rounded-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          alertMessage={alertmsg}
        />

        <CustomInput
          id="password"
          label="Password"
          placeholder="Password"
          className="rounded-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          alertMessage={alertmsg}
        />

        <div className="flex flex-col gap-2 items-center justify-center mt-1">
          <CustomButton
            buttonText="Log In"
            className="rounded-full w-[40%] h-10"
            onClick={onLogin} 
          />

          <Link href="/forgot-password" className="text-[14px] text-gray-600 hover:underline">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
