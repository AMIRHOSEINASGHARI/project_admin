"use client";

// constants
import { productColumn } from "@/constants/tableColumns";
import { productsDataSourse } from "@/constants/tableDataSourse";
// componnets
import { Table } from "antd";

const ProductsList = ({ products }) => {
  return (
    <div>
      <Table
        scroll={{ x: true }}
        pagination={false}
        columns={productColumn}
        dataSource={productsDataSourse(products)}
      />
    </div>
  );
};

export default ProductsList;
