"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "../Icons";
import { FormSchema } from "@/lib/schemas";
import SendButton from "./send-button";
import { useGlobalstate } from "@/context/globalContext";
import { useEffect, useTransition } from "react";
import classNames from "classnames";

export function InputForm() {
  const { next, setNext, registerState, setRegisterState } = useGlobalstate();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      mobile: "",
      constmobile: "",
      address: "",
      gender: "Male",
    },
  });

  const name = form.watch("name");
  const lastname = form.watch("lastname");
  const mobile = form.watch("mobile");
  const constmobile = form.watch("constmobile");
  const address = form.watch("address");

  useEffect(() => {
    if (registerState && !next) {
      form.setValue("name", registerState?.name);
      form.setValue("lastname", registerState?.lastname);
      form.setValue("mobile", registerState?.mobile);
      form.setValue("constmobile", registerState?.constmobile);
      form.setValue("address", registerState?.address);
    }
  }, [registerState, next]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setRegisterState(data);

    startTransition(() => {
      setNext(true);
    });

    // setNext(true);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[1440px]  mx-auto"
        >
          <div className=" lg:w-[808px]  mx-auto mt-[33px] md:w-[700px] mx-atuo w-[311px]  ">
            <h3 className="text-[14px] text-[#37474F] font-bold leading-[21.88px]  ">
              ثبت آدرس
            </h3>
            <div className=" lg:pr-[25px] mb-[100px] lg:mb-[0px] mt-[8px] lg:px-[0px] px-[25px]  [box-shadow:_0px_0px_16px_0px_#00000014;] bg-white rounded-[4px] ">
              <div className="w-full   lg:space-y-[35px] space-y-[0px] pb-[30px] ">
                <div className="text-[16px] text-[#37474F] font-bold leading-[32px] md:pt-[22px] pt-[14.65px]  ">
                  لطفا مشخصات و آدرس خود را وارد کنید
                </div>
                <div className="w-full grid lg:grid-cols-3 gap-y-4 lg:gap-y-0  ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" w-full relative mt-[15.2px] md:mt-[0px]">
                        <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] ">
                          نام
                        </FormLabel>
                        <FormControl className="">
                          <Input
                            placeholder="مثال: علی"
                            {...field}
                            className=" border border-[#D4D4D4] focus:border-[#00BFA5]  h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
                   w-full lg:w-[222px] relative
                   "
                          />
                        </FormControl>
                        {name.trim().length > 0 && (
                          <div
                            className=" absolute lg:left-12 left-4 top-[39px] cursor-pointer  "
                            onClick={() => {
                              form.setValue("name", "");
                            }}
                          >
                            <Icons.close />
                          </div>
                        )}

                        <FormMessage className=" text-[#E61236] font-normal text-[10px] leading-[32px] !mt-[0px] " />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className=" w-full relative  ">
                        <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] ">
                          نام خانوادگی
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="مثال: رضایی"
                            {...field}
                            className=" border border-[#D4D4D4] focus:border-[#00BFA5] w-full lg:w-[222px]  h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
                   "
                          />
                        </FormControl>
                        {lastname.trim().length > 0 && (
                          <div
                            className=" absolute lg:left-12 left-4 top-[39px] cursor-pointer  "
                            onClick={() => {
                              form.setValue("lastname", "");
                            }}
                          >
                            <Icons.close />
                          </div>
                        )}
                        <FormMessage className=" text-[#E61236] font-normal text-[10px] leading-[32px] !mt-[0px] " />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem className=" w-full relative">
                        <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] ">
                          شماره تلفن همراه
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="مثال: 09382134973"
                            {...field}
                            className=" border border-[#D4D4D4] focus:border-[#00BFA5] w-full lg:w-[222px] h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
                   "
                          />
                        </FormControl>
                        {mobile.trim().length > 0 && (
                          <div
                            className=" absolute lg:left-12 left-4 top-[39px] cursor-pointer  "
                            onClick={() => {
                              form.setValue("mobile", "");
                            }}
                          >
                            <Icons.close />
                          </div>
                        )}

                        <FormMessage className=" text-[#E61236] font-normal text-[10px] leading-[32px] !mt-[0px] " />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex lg:gap-x-[40px] gap-x-0 pt-4 lg:pt-0 gap-y-4 lg:gap-y-0 mt-4 lg:mt-0 flex-col lg:flex-row  ">
                  <FormField
                    control={form.control}
                    name="constmobile"
                    render={({ field }) => (
                      <FormItem className=" w-full lg:w-[222px] relative ">
                        {/* <FormItem className=" w-full  relative "> */}
                        <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] flex items-center justify-between ">
                          <span>
                            شماره تلفن ثابت
                            <span className=" font-medium text-[12px] leading-[18.75px] md:text-[10px] md:leading-[15.63px] text-[#37474F] ">
                              (اختیاری)
                            </span>
                          </span>
                          <div className=" mr-atuo font-normal text-[12px] leading-[18.75px] text-[#757575] md:text-[10px] md:leading-[15.63px] md:text-[#37474F] ">
                            *با پیش شماره
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="مثال: 02155840325"
                            {...field}
                            className=" border border-[#D4D4D4] focus:border-[#00BFA5] h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 w-full lg:w-[222px]
                   "
                          />
                        </FormControl>
                        {constmobile.trim().length > 0 && (
                          <div
                            className=" absolute lg:left-2 left-4 top-[39px] cursor-pointer  "
                            onClick={() => {
                              form.setValue("constmobile", "");
                            }}
                          >
                            <Icons.close />
                          </div>
                        )}

                        <FormMessage className=" text-[#E61236]  font-normal text-[10px] leading-[32px] !mt-[0px] " />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="w-full relative ">
                        <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] ">
                          آدرس
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className=" border border-[#D4D4D4] focus:border-[#00BFA5] h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 lg:w-[480px] w-full
                   "
                          />
                        </FormControl>
                        {address.trim().length > 0 && (
                          <div
                            className=" absolute lg:left-12 left-4 top-[39px] cursor-pointer  "
                            onClick={() => {
                              form.setValue("address", "");
                            }}
                          >
                            <Icons.close />
                          </div>
                        )}

                        <FormMessage className=" text-[#E61236] font-normal text-[10px] leading-[32px] !mt-[0px] " />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="gap-x-20 flex items-center mt-4 lg:mt-0  pt-4 lg:pt-0">
                      <FormLabel>جنسیت</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-3 items-center !mt-[0px] "
                        >
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormLabel className="font-normal">آقا</FormLabel>
                            <FormControl>
                              <RadioGroupItem
                                value="Male"
                                className=" [&_svg]:text-[#00BFA5]  "
                              />
                            </FormControl>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormLabel className="font-normal">خانم</FormLabel>
                            <FormControl>
                              <RadioGroupItem
                                value="Female"
                                className=" [&_svg]:text-[#00BFA5]  "
                              />
                            </FormControl>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <SendButton />
        </form>
      </Form>
    </>
  );
}
