"use client";

import React, { useRef, useEffect, useState, useTransition } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { Toaster, toast } from "sonner";

import { Icons } from "./Icons";
import { useGlobalstate } from "@/context/globalContext";
import { BeatLoader } from "react-spinners";
import { Register } from "@/lib/actions";
import { Button } from "./ui/button";

export function MapCor() {
  const MAPTILER_API_KEY =
    process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "Gh8jJbn8EzD69h4Ra7Ov";

  const { setNext, registerState, finalState, setFinalState, setSuccessState } =
    useGlobalstate();
  const [isPending, startTransition] = useTransition();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const [lng, setLng] = useState(51.40275213584229);
  const [lat, setLat] = useState(35.67477257699758);
  const [zoom, setZoom] = useState(10);
  const [api, setApi] = useState<typeof maptilersdk | null>(null);
  const [currentMarker, setCurrentMarker] = useState<maptilersdk.Marker | null>(
    null
  );

  useEffect(() => {
    (async () => {
      if (api) return;

      const maptilerModule = await import("@maptiler/sdk");
      maptilerModule.config.apiKey = MAPTILER_API_KEY;
      setApi(maptilerModule);
    })();
  }, [api]);

  useEffect(() => {
    if (!api || !mapContainer.current) return;
    if (map.current) return;

    map.current = new api.Map({
      container: mapContainer.current,
      style: api.MapStyle.STREETS,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("click", (e) => {
      addMarker(e.lngLat.lng, e.lngLat.lat);
      console.log("click", e.lngLat.lng, e.lngLat.lat);
      const lng = e.lngLat.lng as number;
      const lat = e.lngLat.lat as number;
      if (registerState) {
        setFinalState({
          ...registerState,
          lng,
          lat,
        });
      }
      console.log(finalState);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [api, zoom]);

  const addMarker = (lng: number, lat: number) => {
    if (!map.current || !api) return;

    if (currentMarker) {
      currentMarker.remove();
    }

    const newMarker = new api.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);

    setCurrentMarker(newMarker);
  };

  function backHandler() {
    // startTransition(() => {
    setNext(false);
    // });
  }

  const submitAction = async () => {
    // if (!!finalState?.lat) {
    //   toast.error("مختصات محل خود رو تعیین کنید");
    //   return;
    // }

    startTransition(async () => {
      if (finalState) {
        const res = await Register(finalState);
        if (res.success) {
          setSuccessState(true);
        }
        if (res.errors) {
          toast.error(res.errors);
        }
      } else {
        toast.error("مختصات محل خود رو تعیین کنید");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center md:pt-[22px]  md:p-4 w-full max-w-4xl mx-auto h-[calc(100vh_-_48px)] md:h-[calc(100vh_-_74px)] ">
        <div className=" sm:flex items-center gap-2 w-full justify-start hidden ">
          {/* svg */}
          <div className=" cursor-pointer " onClick={backHandler}>
            <Icons.arrow />
          </div>
          <div className=" font-normal text-[16px] text-[#37474F] leading-[32px] ">
            انتخاب آدرس
          </div>
        </div>
        <div className="relative w-full h-full sm:h-[400px] md:h-[380px] md:rounded-[4px]  overflow-hidden border border-gray-200 shadow-md ">
          <div className=" sticky top-0 w-full bg-[#FFFFFFCC]  ">
            <p className=" font-bold text-[12px] text-[#37474F] leading-[32px] pr-12 py-[10px] hidden sm:block ">
              موقعیت موردنظر خود را روی نقشه مشخص کنید.
            </p>
            <div className=" sm:hidden flex items-center justify-between px-2">
              {/* svg */}
              <div className=" cursor-pointer " onClick={backHandler}>
                <Icons.arrow />
              </div>
              <div className=" font-normal text-[16px] text-[#37474F] leading-[32px] ">
                انتخاب موقعیت
              </div>
              <div>{/* <Icons.arrow /> */}</div>
            </div>
          </div>
          <div
            ref={mapContainer}
            className=" w-full h-full"
            aria-label="نقشه تعاملی"
          />
        </div>
      </div>
      {/* <SendButton /> */}
      <div className=" w-full  h-[84px]  fixed bottom-0 isolate z-20 ">
        <div className=" w-full h-full flex items-center justify-center  [box-shadow:_0px_-1px_8px_0px_#0000001A;;] bg-white  ">
          <Button
            type="submit"
            onClick={submitAction}
            className=" md:h-[46px]  !hover:bg-[#00BFA5] md:w-[224px] w-[343px] h-[48px] bg-[#00BFA5] flex items-center justify-center font-bold text-[16px] leading-[25px] rounded-[4px] "
          >
            {isPending ? (
              <BeatLoader size={5} color="#ffffff" />
            ) : (
              "ثبت و ادامه"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
