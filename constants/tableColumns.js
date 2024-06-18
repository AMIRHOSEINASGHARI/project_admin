import { Table } from "antd";

export const ordersColumns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "User",
    dataIndex: "userId",
    key: "userId",
    responsive: ["lg"],
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Items",
    dataIndex: "totalProducts",
    key: "totalProducts",
  },
  {
    title: "Price",
    dataIndex: "totalPayable",
    key: "totalPayable",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  Table.EXPAND_COLUMN,
  {
    dataIndex: "actions",
    key: "actions",
  },
];

export const productOrdersColumns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Quantity",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
];

export const productsColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Creator",
    dataIndex: "creator",
    key: "creator",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Orders",
    dataIndex: "orders",
    key: "orders",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export const orderPageCheckoutTableColumns = [
  {
    key: "product",
    title: "Product",
    dataIndex: "product",
  },
  {
    key: "qty",
    title: "Qty",
    dataIndex: "qty",
  },
  {
    key: "unitPrice",
    title: "Unit Price",
    dataIndex: "unitPrice",
  },
  {
    key: "amount",
    title: "Amount",
    dataIndex: "amount",
  },
];

export const commentsColumns = [
  {
    key: "id",
    dataIndex: "id",
    title: "ID",
  },
  {
    key: "user",
    dataIndex: "user",
    title: "User",
    responsive: ["lg"],
  },
  {
    key: "status",
    dataIndex: "status",
    title: "Status",
  },
  {
    key: "isAnswered",
    dataIndex: "isAnswered",
    title: "Is Answered",
  },
  {
    key: "date",
    dataIndex: "date",
    title: "Date",
  },
  {
    key: "action",
    dataIndex: "action",
    title: "Action",
  },
];

export const usersColumns = [
  {
    key: "name",
    dataIndex: "name",
    title: "Name",
  },
  {
    key: "phoneNumber",
    dataIndex: "phoneNumber",
    title: "Phone Number",
  },
  {
    key: "address",
    dataIndex: "address",
    title: "Address",
  },
  {
    key: "orders",
    dataIndex: "orders",
    title: "Orders",
  },
  {
    key: "comments",
    dataIndex: "comments",
    title: "Comments",
  },
  {
    key: "likes",
    dataIndex: "likes",
    title: "Likes",
  },
  {
    key: "cartStatus",
    dataIndex: "cartStatus",
    title: "Cart Status",
  },
  {
    key: "date",
    dataIndex: "date",
    title: "Joined At",
  },
];

export const userOrdersColumns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Items",
    dataIndex: "totalProducts",
    key: "totalProducts",
  },
  {
    title: "Price",
    dataIndex: "totalPayable",
    key: "totalPayable",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export const userCommentsColumns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "IsAnswered",
    dataIndex: "isAnswered",
    key: "isAnswered",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export const userLikesColumns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

export const blogsColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

export const adminsColumns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Role",
    dataIndex: "roll",
    key: "roll",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

export const upcommingEventsCollumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export const coinsColumns = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <div className="min-w-[200px]">{text}</div>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Price 24h %",
    dataIndex: "price_last_24h",
    key: "price_last_24h",
    render: (text) => <div className="min-w-[100px]">{text}</div>,
  },
  {
    title: "Market Cap",
    dataIndex: "market",
    key: "market",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Market 24h %",
    dataIndex: "market_last_24h",
    key: "market_last_24h",
    render: (text) => <div className="min-w-[100px]">{text}</div>,
  },
  {
    title: "Last 7 days",
    dataIndex: "last_7",
    key: "last_7",
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Circulating Supply",
    dataIndex: "circulating_supply",
    key: "circulating_supply",
  },
];
