// constants
import { upcommingEventsCollumns } from "@/constants/tableColumns";
// cmp
import Skeleton from "@/components/shared/skeletons/Skeleton";
import { Table } from "antd";

const DashboardPageSkeletons = () => {
  const invoicesColumns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceID",
      key: "invoiceID",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const invoicesDataSourse = Array(4)
    .fill([1, 2, 3, 4])
    .map((item) => ({
      key: item,
      invoiceID: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
      category: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
      price: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
      status: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
    }));

  const upcommingEventsDataSourse = Array(4)
    .fill([1, 2, 3, 4])
    .map((item) => ({
      key: item,
      date: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
      title: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
      status: (
        <Skeleton className="w-[70px] h-3 rounded-full" bgColor="bg-gray-300" />
      ),
    }));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-5">
        {Array(8)
          .fill([1, 2, 3, 4, 5, 6, 7, 8])
          .map((item) => (
            <Skeleton
              key={item}
              className="flex flex-1 flex-col min-w-[280px] rounded-xl p-5"
            >
              <Skeleton
                className="w-1/2 h-3 rounded-full"
                bgColor="bg-gray-300"
              />
              <div className="flex items-center justify-between gap-4 mt-9 mb-3">
                <Skeleton
                  className="w-1/2 h-8 rounded-xl"
                  bgColor="bg-gray-300"
                />
                <Skeleton
                  className="w-24 h-16 rounded-xl"
                  bgColor="bg-gray-300"
                />
              </div>
              <Skeleton
                className="w-1/2 h-3 rounded-full"
                bgColor="bg-gray-300"
              />
            </Skeleton>
          ))}
      </div>
      <div className="flex max-xl:flex-col gap-5">
        <Skeleton className="rounded-xl p-5 flex flex-col space-y-3">
          <Skeleton
            className="w-[150px] h-5 rounded-full"
            bgColor="bg-gray-300"
          />
          <div className="flex items-center justify-center w-full h-full">
            <Skeleton
              className="w-[150px] h-[150px] rounded-full"
              bgColor="bg-gray-300"
            />
          </div>
          <Skeleton
            className="w-[100px] h-5 rounded-full"
            bgColor="bg-gray-300"
          />
          <Skeleton
            className="w-[200px] h-5 rounded-full"
            bgColor="bg-gray-300"
          />
          <Skeleton
            className="w-[150px] h-5 rounded-full"
            bgColor="bg-gray-300"
          />
        </Skeleton>
        <Skeleton className="rounded-xl p-5 flex flex-col h-[300px] xl:h-auto space-y-3 w-full">
          <Skeleton
            className="w-[200px] h-5 rounded-full"
            bgColor="bg-gray-300"
          />
          <div className="w-full flex justify-end gap-3">
            <Skeleton
              className="w-[80px] h-5 rounded-full"
              bgColor="bg-gray-300"
            />
            <Skeleton
              className="w-[80px] h-5 rounded-full"
              bgColor="bg-gray-300"
            />
          </div>
          <Skeleton
            className="w-full h-full rounded-xl"
            bgColor="bg-gray-300"
          />
        </Skeleton>
      </div>
      <div className="flex flex-col 2xl:flex-row gap-4">
        <div className="w-full tableContainer">
          <Skeleton
            className="w-[150px] h-5 rounded-full m-5"
            bgColor="bg-gray-300"
          />
          <Table
            pagination={false}
            columns={invoicesColumns}
            dataSource={invoicesDataSourse}
          />
        </div>
        <div className="w-full tableContainer">
          <Skeleton
            className="w-[150px] h-5 rounded-full m-5"
            bgColor="bg-gray-300"
          />
          <Table
            pagination={false}
            columns={upcommingEventsCollumns}
            showHeader={false}
            dataSource={upcommingEventsDataSourse}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageSkeletons;
