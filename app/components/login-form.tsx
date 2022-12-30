"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import Spinner from "./spinner";
import TextInput from "./text-input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [textVisibility, setTextVisibility] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      console.log(data);
      await signIn("credentials", { callbackUrl: "/control" }, data);

      // router.push("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex">
      <div className="flex-grow-[1] h-full bg-white ">
        <form className="p-6 pt-40">
          <TextInput type="email" placeholder="E-mail" {...register("email")} />

          <TextInput
            type={textVisibility ? "text" : "password"}
            placeholder="Password"
            className="mt-6"
            rightIcon={
              <div onClick={() => setTextVisibility((prevState) => !prevState)}>
                {textVisibility ? <EyeSlashIcon /> : <EyeIcon />}
              </div>
            }
            {...register("password")}
          />
          <button
            className="btn mt-6"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            {!loading ? (
              "Login"
            ) : (
              <>
                <Spinner />
                Loading...
              </>
            )}
          </button>
        </form>
      </div>
      <div className="flex-grow-0 md:flex-grow-[3] bg-blue-500" />
    </div>
  );
};

export default LoginForm;
