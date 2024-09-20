import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "نام باید دارای 3 کاراکتر باشد",
  }),
  lastname: z.string().min(2, {
    message: "نام خانوادگی باید دارای 3 کاراکتر باشد",
  }),
  mobile: z
    .string()
    .refine((val) => /^((0?9)|(\+?989))\d{9}$/.test(val.toString()), {
      message: "شماره وارد شده صحیح نیست",
    })
    .default(""),
  constmobile: z
    .string()
    .optional()
    .refine((val) => !val || /^0[0-9]{2,}[0-9]{7,}$/.test(val.toString()), {
      message: "شماره وارد شده صحیح نیست",
    }),
  address: z
    .string()
    .min(10, {
      message: "آدرس باید حداقل 3 کاراکتر باشد",
    })
    .regex(/^[\u0600-\u06FF\s\d-–]+$/, {
      message:
        "آدرس نامعتبر است. فقط از حروف فارسی، اعداد و کاراکترهای - و – استفاده کنید.",
    }),
  gender: z.enum(["Male", "Female"]).default("Male"),
});

export const FormSchemaWithExtras = z.object({
  name: z.string().min(2, {
    message: "نام باید دارای 3 کاراکتر باشد",
  }),
  lastname: z.string().min(2, {
    message: "نام خانوادگی باید دارای 3 کاراکتر باشد",
  }),
  mobile: z
    .string()
    .refine((val) => /^((0?9)|(\+?989))\d{9}$/.test(val.toString()), {
      message: "شماره وارد شده صحیح نیست",
    })
    .default(""),
  constmobile: z
    .string()
    .optional()
    .refine((val) => !val || /^0[0-9]{2,}[0-9]{7,}$/.test(val.toString()), {
      message: "شماره وارد شده صحیح نیست",
    }),
  address: z
    .string()
    .min(10, {
      message: "آدرس باید حداقل 3 کاراکتر باشد",
    })
    .regex(/^[\u0600-\u06FF\s\d-–]+$/, {
      message:
        "آدرس نامعتبر است. فقط از حروف فارسی، اعداد و کاراکترهای - و – استفاده کنید.",
    }),
  gender: z.enum(["Male", "Female"]).default("Male"),
  lng: z.number().min(-180).max(180),
  lat: z.number().min(-90).max(90),
});
