'use client'
import Link from 'next/link';
import { useState } from 'react';
import CustomButton from '@/components/custom/Button';
import CustomInput from '@/components/custom/Input';
import { useRouter } from "next/navigation";
import { login } from '@/services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerts, setalerts] = useState({
    show: false,
    msg: "",
  });

  const router = useRouter();

  const onLogin = async () => {
    if (!email || !password) {
      setalerts({ show: true, msg: "Please fill all fields." });
      return;
    }

      const {res, role} = await login({email, password});
      if (!res) {
        setalerts({ show: true, msg: "Login failed. Check credentials." });
        return;
      }

      if (role === "admin") router.push("/admin");
      else if (role === "student") router.push("/student");
      else if (role === "teacher") router.push("/teacher");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <form className="flex flex-col gap-7 bg-white/80 shadow-xs rounded-xl p-8 mb-4 w-[80%] sm:w-[60%] lg:w-[35%]">
        <h2 className="text-3xl font-semibold text-center">Sign In</h2>

        <CustomInput
          id="username"
          label="User ID"
          placeholder="User ID"
          className="rounded-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          alerts={alerts}
        />

        <CustomInput
          id="password"
          label="Password"
          placeholder="Password"
          className="rounded-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          alerts={alerts}
        />

        <div className="flex flex-col gap-2 items-center justify-center mt-1">
          <CustomButton
            buttonText="Log In"
            className="rounded-full w-[40%] h-10"
            onClick={onLogin}
          />

          <Link href="/auth/forgot-password" className="text-[14px] text-gray-600 hover:underline">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
