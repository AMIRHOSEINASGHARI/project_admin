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
                    <Link
                      key={coin.id}
                      href={`/crypto/${coin.id}`}
                      className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2 Transition"
                    >
                      <p className="text-p1">{index + 1}.</p>
                      <Image
                        as={NextImage}
                        src={coin?.large || coin?.thumb || images.person}
                        width={100}
                        height={100}
                        alt="coin"
                        radius="none"
                        className="w-[40px] h-[40px]"
                      />
                      <p className="text-p1 flex gap-2">
                        <span className="text-darkGray">
                          #{coin.market_cap_rank}
                        </span>
                        <span className="font-bold">{coin.name}</span>
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {data?.coins?.length === 0 && isFetching === false && (
              <div className="text-center flex flex-col justify-center items-center w-full h-full">
                <h1 className="font-medium text-h4">Not found</h1>
                <p className="text-p1">
                  No results found for{" "}
                  <span className="font-medium">"{searchTerm}".</span>
                </p>
                <p className="text-p1">
                  Try checking for typos or using complete words.
                </p>
              </div>
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
