import { z } from "zod";

export const FormSchema = z.object({
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
  address: z.string().min(10, {
    message: "آدرس باید حداقل 3 کاراکتر باشد",
  }),
  gender: z.enum(["Male", "Female"]),
});

export const FormSchemaWithExtras = z.object({
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
  address: z.string().min(10, {
    message: "آدرس باید حداقل 3 کاراکتر باشد",
  }),
  gender: z.enum(["Male", "Female"]),
  lng: z.number(),
  lat: z.number(),
});
