"use client";

// react
import { useEffect, useState } from "react";
// next
import Link from "next/link";
import NextImage from "next/image";
// react query
import { useQuery } from "@tanstack/react-query";
// constants
import { images } from "@/constants";
// cmp
import CustomInput from "@/components/shared/form/CustomInput";
import Loader from "@/components/shared/Loader";
import { Image } from "@nextui-org/image";
import { Alert } from "antd";
import NotFound from "./NotFound";
import CoinItem from "./CoinItem";

// .env vars
const COIN_API_URL = process.env.NEXT_PUBLIC_COIN_API_URL;
const COIN_API_KEY = process.env.NEXT_PUBLIC_COIN_API_KEY;

const SearchCrypto = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // controller
  const controller = new AbortController();
  // searching coins
  const searchCoins = async () => {
    const res = await fetch(
      `${COIN_API_URL}/search?query=${searchTerm}&&x_cg_demo_api_key=${COIN_API_KEY}`,
      {
        signal: controller.signal,
      }
    );
    const data = await res.json();
    return data;
  };
  // making request
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["search-coin"],
    queryFn: searchCoins,
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
  });

  useEffect(() => {
    if (searchTerm.length !== 0) {
      refetch();
    } else {
      setSearchTerm("");
    }

    return () => controller.abort();
  }, [searchTerm]);

  return (
    <div className="px-6 pb-6">
      <div className="relative">
        <CustomInput
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm.length !== 0 && (
          <div className="box border absolute z-20 w-full max-h-[400px] top-[70px] overflow-y-auto bg-white/10 backdrop-blur-md">
            {isFetching && (
              <div className="w-full h-full flex justify-center items-center">
                <Loader />
              </div>
            )}
            {data?.coins?.length !== 0 && isFetching === false && (
              <>
                <p>{data?.coins?.length} Results found</p>
                <div className="space-y-1">
                  {data?.coins?.map((coin, index) => (
                    <CoinItem data={coin} index={index} key={coin.id} />
                  ))}
                </div>
              </>
            )}
            {data?.coins?.length === 0 && isFetching === false && (
              <NotFound searchTerm={searchTerm} />
            )}
            {isError && error?.name !== "AbortError" && (
              <Alert message={error.message} type="error" showIcon />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCrypto;
