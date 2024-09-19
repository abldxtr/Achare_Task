import Link from "next/link";
import { Icons } from "./Icons";

export default function Header() {
  return (
    <header className=" w-full max-w-[1440px] md:px-8 px-4 mx-auto md:h-[74px] h-[48px] [box-shadow:_0px_0.5px_2px_0px_#00000026;] bg-white ">
      <div className=" w-full h-full flex items-center justify-between  ">
        {/* logo right */}
        <div className=" hidden md:block ">
          <Icons.Logo />
        </div>
        <div className=" block md:hidden ">
          <Icons.MobLogo />
        </div>

        {/* left */}
        <div className=" flex itemc-enter gap-x-4 ">
          <Link
            href="/"
            className=" text-[12.5px] md:text-[14px] text-[#37474F] font-bold leading-[19.53px] md:leading-[21.88px] cursor-pointer  "
          >
            ثبت آدرس
          </Link>
          <Link
            href="/addresses"
            className=" text-[12.5px] md:text-[14px] text-[#00BFA5] font-bold leading-[19.53px] md:leading-[21.88px]  cursor-pointer "
          >
            مشاهده آدرس ها
          </Link>
        </div>
      </div>
    </header>
  );
}
