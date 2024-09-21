import { item } from "@/app/addresses/page";

export function AddressComponent({
  first_name,
  last_name,
  address,
  gender,
  coordinate_mobile,
  coordinate_phone_number,
}: item) {
  return (
    <>
      {/* <!-- sm --> */}
      <div className=" grid mt-[9px] gap-y-[12px] lg:hidden ">
        {/* <!-- 1 --> */}
        <div className=" bg-white px-[16px] rounded-[4px]  pb-5 [box-shadow:_0px_0px_16px_0px_#00000014;]   ">
          <div className=" flex items-center justify-between pt-[19px] ">
            <div className=" font-normal text-[16px] leading-[32px] text-[#37474F] ">
              نام و نام خانوادگی
            </div>
            <div className=" font-bold text-[14px] text-[#37474F] ">
              {first_name + " " + last_name}
            </div>
          </div>
          <div className=" flex items-center justify-between pt-[16px] ">
            <div className=" font-normal text-[16px] leading-[32px] text-[#37474F] ">
              جنسیت
            </div>
            <div className=" font-bold text-[14px] text-[#37474F] ">
              {gender}
            </div>
          </div>
          <div className=" flex items-center justify-between pt-[16px] ">
            <div className=" font-normal text-[16px] leading-[32px] text-[#37474F] ">
              شماره تلفن همراه
            </div>
            <div className=" font-bold text-[14px] text-[#37474F] ">
              {coordinate_phone_number}
            </div>
          </div>
          <div className=" h-[1px] w-full px-[32px]  mt-[16px] bg-[#E0E0E0] "></div>
          <div className=" flex flex-col pt-[16px]  ">
            <div className=" font-normal text-[16px] leading-[32px] text-[#37474F] ">
              آدرس
            </div>
            <div className=" font-bold text-[14px] text-[#37474F] ">
              {address}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- lg  --> */}
      <div className=" mt-[9px] gap-y-[20px] hidden lg:grid ">
        {/* <!-- 1 --> */}

        <div className="grid  grid-cols-3 rounded-[4px] bg-white px-[16px] pb-5 [box-shadow:_0px_0px_16px_0px_#00000014;] ">
          <div className="flex pt-[19px] md:flex-col">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              نام
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {first_name}
            </div>
          </div>
          <div className="flex pt-[19px] md:flex-col">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              نام خانوادگی
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {last_name}
            </div>
          </div>
          <div className="flex pt-[16px] md:flex-col">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              شماره تلفن همراه
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {coordinate_phone_number}
            </div>
          </div>
          <div className="flex pt-[16px] md:flex-col">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              شماره تلفن ثابت
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {coordinate_mobile}
            </div>
          </div>
          <div className="flex pt-[16px] md:flex-col">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              جنسیت
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {gender}
            </div>
          </div>

          <div className="flex flex-col pt-[16px]">
            <div className="text-[14px] font-normal leading-[21.88px] text-[#37474F]">
              آدرس
            </div>
            <div className="mt-[16px] leading-[25px] text-[14px] font-bold text-[#37474F]">
              {address}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
