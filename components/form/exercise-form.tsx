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
import CustomFormField, { FormFieldType } from "./custom-field";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "نام باید دارای 3 کاراکتر باشد",
  }),
  lastname: z.string().min(2, {
    message: "نام خانوادگی باید دارای 3 کاراکتر باشد",
  }),
  mobile: z.string().min(2, {
    message: "شماره وارد شده صحیح نیست",
  }),
  constmobile: z.string().min(2, {
    message: "",
  }),
  address: z.string().min(3, {
    message: "آدرس باید حداقل 3 کاراکتر باشد",
  }),
  gender: z.enum(["Male", "Female"]),
});

export function ExInputForm() {
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-[35px] pt-[23px] "
        >
          <div className="w-full grid lg:grid-cols-3  ">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              placeholder="John Doe"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className=" w-full relative ">
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
                      className=" absolute lg:left-12 left-4 top-1/2 cursor-pointer  "
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
                      className=" absolute lg:left-12 left-4 top-1/2 cursor-pointer  "
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
          <div className="w-full flex gap-x-[40px] flex-col lg:flex-row  ">
            <FormField
              control={form.control}
              name="constmobile"
              render={({ field }) => (
                <FormItem className=" w-full lg:w-[222px] relative ">
                  <FormLabel className=" font-medium text-[14px] leading-[21.88px] text-[#37474F] ">
                    شماره تلفن ثابت(اختیاری)
                  </FormLabel>
                  <FormControl>
                    <div className=" relative ">
                      <Input
                        placeholder="مثال: 02155840325"
                        {...field}
                        className=" border border-[#D4D4D4] focus:border-[#00BFA5] h-[46px] bg-white
                   placeholder:text-[#B6B6B6] placeholder:text-[14px] placeholder:font-normal outline-none focus-within:outline-none
                   focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 w-full lg:w-[222px]
                   "
                      />
                      {constmobile.trim().length > 0 && (
                        <div
                          className=" absolute left-2 top-1/2 cursor-pointer  "
                          onClick={() => {
                            form.setValue("constmobile", "");
                          }}
                        >
                          <Icons.close />
                        </div>
                      )}
                    </div>
                  </FormControl>

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
                      className=" absolute left-12 top-1/2 cursor-pointer  "
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
              <FormItem className="gap-x-20 flex items-center ">
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
          <div className=" w-full flex items-center justify-center  [box-shadow:_0px_-1px_8px_0px_#0000001A;;] bg-white ">
            <Button
              type="submit"
              className=" h-[46px]  !hover:bg-[#00BFA5] w-[224px] bg-[#00BFA5] flex items-center justify-center font-bold text-[16px] leading-[25px] rounded-[4px] "
            >
              ثبت و ادامه
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
