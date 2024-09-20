import { Button } from "../ui/button";

export default function SendButton() {
  return (
    <div className=" w-full  h-[84px]  fixed bottom-0 isolate z-20 ">
      <div className=" w-full h-full flex items-center justify-center  [box-shadow:_0px_-1px_8px_0px_#0000001A;;] bg-white  ">
        <Button
          type="submit"
          className=" md:h-[46px] h-[48px]  !hover:bg-[#00BFA5] md:w-[224px] w-[343px]  bg-[#00BFA5] flex items-center justify-center font-bold text-[16px] leading-[25px] rounded-[4px] "
        >
          ثبت و ادامه
        </Button>
      </div>
    </div>
  );
}
