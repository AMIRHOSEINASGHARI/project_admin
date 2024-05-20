"use client";

// constants
import { productsColumn } from "@/constants/tableColumns";
import { productsDataSourse } from "@/constants/tableDataSourse";
// componnets
import { Table } from "antd";

const ProductsList = ({ products }) => {
  return (
    <div>
      <Table
        scroll={{ x: true }}
        pagination={false}
        columns={productsColumn}
        dataSource={productsDataSourse(products)}
      />
    </div>
  );
};

export default ProductsList;
