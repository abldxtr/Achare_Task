import { AddressComponent } from "@/components/address";
import Header from "@/components/header";
import GetAddress from "@/lib/get-address";

export type item = {
  first_name: string;
  last_name: string;
  address: string;
  gender: "آقا" | "خانم";
  coordinate_mobile: number | string;
  coordinate_phone_number: number | string;
};

export default async function AddressPage() {
  const address: item[] = await GetAddress();
  console.log("address page", address.length);
  console.log("address page last", address.slice(-1)[0]);
  console.log("address page 0", address[0]);
  console.log("address page 10", address[0]);

  return (
    <div>
      <Header />
      <div className="mx-auto sm:w-[90%] w-[343px] min-w-0 max-w-[806px] pt-[26px] mb-8  ">
        <div className=" font-normal text-[16px] leading-[32px] text-[#37474F] ">
          آدرس ها و مشخصات
        </div>

        {address.slice(0, 10).map((item: item, index: number) => {
          // const {gender} = item
          const gender = item.gender || "آقا";
          const lastName = item.last_name || "حبیبی";
          const coordinate_mobile =
            item.coordinate_phone_number || "02155855222";

          return (
            <AddressComponent
              key={index}
              first_name={item.first_name}
              last_name={lastName}
              address={item.address}
              gender={gender}
              coordinate_mobile={coordinate_mobile}
              coordinate_phone_number={item.coordinate_phone_number}
            />
          );
        })}
      </div>
    </div>
  );
}
