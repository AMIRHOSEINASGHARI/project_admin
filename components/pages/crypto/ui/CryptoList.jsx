"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchCoins } from "@/services/queries";
// constants
import { coinsColumns } from "@/constants/tableColumns";
import { coinsListDataSourse } from "@/constants/tableDataSourse";
// cmp
import Loader from "@/components/shared/Loader";
import { Table } from "antd";

const CryptoList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 365 * 24 * 60 * 60,
    staleTime: 365 * 24 * 60 * 60,
  });

  return (
    <div className="rounded-box cardShadow3 border">
      <div className="p-6">
        <h1 className="h2">Cryptocurrencies Prices</h1>
      </div>
      {isLoading && (
        <div className="w-full flex items-center justify-center min-h-[300px]">
          <Loader width={30} height={30} />
        </div>
      )}
      {isError && <p className="text-center">Error!</p>}
      {!isLoading && !isError && (
        <Table
          columns={coinsColumns}
          dataSource={coinsListDataSourse(data)}
          scroll={{ x: true }}
        />
      )}
    </div>
  );
};

export default CryptoList;
