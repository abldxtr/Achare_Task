import Link from "next/link";
import { Icons } from "./Icons";

export default function SuccessPage() {
  return (
    <div className=" mt-[124px] w-full flex items-center justify-center flex-col">
      {/* icon */}
      <div>
        <Icons.success />
      </div>
      <div className=" font-bold text-[14px] leading-[32px] text-[#37474F] mt-[8px] ">
        اطلاعات شما با موفقیت ثبت شد
      </div>
      <Link href="/addresses" className="mt-[39px] cursor-pointer ">
        <div
          className=" rounded-[4px] text-[#00BFA5] text-[16px] font-bold  leading-[25px]
                 w-[341px] h-[48px] bg-transparent border border-[#00BFA5] flex items-center justify-center "
        >
          مشاهده اطلاعات
        </div>
      </Link>
    </div>
  );
}
