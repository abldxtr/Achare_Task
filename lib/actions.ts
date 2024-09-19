"use server";

import { z } from "zod";
import { FormSchemaWithExtras } from "./schemas";
import { error } from "console";

export async function Register(values: z.infer<typeof FormSchemaWithExtras>) {
  // const { userId, username } = await getUserId();

  const validatedFields = FormSchemaWithExtras.safeParse(values);

  if (!validatedFields.success) {
    return {
      // errors: validatedFields.error.flatten().fieldErrors,
      // message: "Missing Fields. Failed to Create Post.",
      errors: "فیلدهای ضروری رو پر کنید.",
    };
  }

  const {
    name: first_name,
    lastname: last_name,
    mobile: coordinate_phone_number,
    constmobile: coordinate_mobile,
    gender,
    address,
    lat,
    lng,
  } = validatedFields.data;
  // console.log("data", data);

  try {
    //   const result = await uploadImg({ image: fileUrl });
    const response = await fetch(
      "https://stage.achareh.ir/api/karfarmas/address",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          coordinate_mobile,
          coordinate_phone_number,
          address,
          region: 1,
          lat,
          lng,
          gender,
        }),
      }
    );
    console.log("res", response);
    if (!response.ok) {
      return { errors: "خطا در ارسال درخواست دوباره تلاش کنید" };
    }

    return {
      success: "the post is created",
      // message:""
    };
  } catch (error) {
    return {
      errors: "خطا در ارسال درخواست دوباره تلاش کنید",
      // message: "Database Error: Failed to Create Post.",
    };
  }
}
