import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {AiFillGithub} from "react-icons/ai";
import {signIn} from "next-auth/react";

const Login = () => {
  return (
    <div className={"w-full h-screen"}>
      <div className={"absolute inset-0"}>
        <Image
          src={"https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/1e3cb929-cbe0-469e-b287-010a5f810ff5/TR-tr-20240819-TRIFECTA-perspective_WEB_1e8ccd1d-a626-408c-ba5a-a7a46ff708d2_large.jpg"}
          alt={"bg"}
          fill
        />
      </div>
      <div className={"relative z-10 rounded-md w-[500px] bg-black/70 h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4"}>
      <h1 className='text-xl font-bold text-center my-4'>Create Netflix Account</h1>
        <div className={"flex h-full items-center justify-center flex-col"}>
          <Button
            className={"mt-4 flex items-center gap-2 w-full h-[56px] bg-red-600 !text-white hover:bg-red-500"}
            onClick={() => signIn("github")}
          >
            <AiFillGithub className={"w-7 h-7"} />
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;