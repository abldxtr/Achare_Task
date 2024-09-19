"use client";

import MainForm from "@/components/form/main-form";
import { InputForm } from "@/components/form/register";
import { MapCor } from "@/components/map";
import classNames from "classnames";

import Header from "@/components/header";
import { useGlobalstate } from "@/context/globalContext";
import SuccessPage from "@/components/success";

export default function Home() {
  const { next, successState } = useGlobalstate();

  return (
    <main className=" w-full  isolate z-10 relative ">
      <Header />
      {/* <MainForm /> */}
      {successState ? <SuccessPage /> : next ? <MapCor /> : <InputForm />}
    </main>
  );
}
