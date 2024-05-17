// next
import Image from "next/image";
import Link from "next/link";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { images } from ".";
// cmp
import moment from "moment";
import OrdersActions from "@/components/pages/orders/ui/OrdersActions";

export const productsDataSourse = (products) =>
  products.map((product) => ({
    key: product._id,
    name: (
      <Link
        href={`/products/${product._id}`}
        className="flex items-center gap-2 w-fit"
      >
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <Image
            src={product.image}
            width={70}
            height={70}
            alt="product"
            radius="none"
            priority
            className="object-cover"
          />
        </div>
        <div>
          <p>{shorterText(product.title, 15)}...</p>
          <p>In {product.category}</p>
        </div>
      </Link>
    ),
    id: <p>#{shorterText(product._id, 6)}</p>,
    stock: (
      <p
        className={`w-fit ${
          product.stock === 0 &&
          "text-darkRose px-2 rounded-xl bg-lightRose font-bold text-xs"
        }`}
      >
        {product.stock === 0 ? "None!" : product.stock.toLocaleString()}
      </p>
    ),
    price: `$${product.price.toLocaleString()}`,
    discount: product.discount || "_",
    orders: product.orders.length || "_",
    comments: product.comments.length || "_",
    likes: product.likes.length || "_",
    date: moment(product.createdAt).calendar(),
  }));

export const productOrdersTabDataSourse = (productOrders) =>
  productOrders.map((order) => ({
    key: order._id,
    orderId: (
      <Link href={`/orders/${order.orderId}`}>
        {shorterText(order.orderId, 10)}
      </Link>
    ),
    qty: order.quantity.toLocaleString(),
    discount: order.discount > 0 ? `%${order.discount}` : "_",
    cost: `$${order.cost.toLocaleString()}`,
  }));

export const ordersListDataSourse = (orders) =>
  orders.map((order) => ({
    key: order._id,
    _id: (
      <Link href={`/orders/${order._id}`}>#{shorterText(order._id, 10)}</Link>
    ),
    userId: (
      <Link href={`/users/${order.userId._id}`}>
        <div className="flex items-center gap-3">
          <Image
            src={order.userId.avatar || images.person}
            width={35}
            height={35}
            alt={shorterText(order.userId.username, 8)}
            priority
          />
          <div>
            <p className="text-p1 font-medium line-clamp-3">
              {order.userId.username}
            </p>
            {order.userId.displayName && (
              <p className="text-p2 text-darkGray">
                {order.userId.displayName}
              </p>
            )}
          </div>
        </div>
      </Link>
    ),
    createdAt: moment(order.createdAt).format("L"),
    totalProducts: order.summary.totalProducts.toLocaleString(),
    totalPayable: `$${order.summary.totalPayable.toLocaleString()}`,
    status: (
      <p
        className={`py-.5 px-2 w-fit rounded-btn text-p2 font-medium ${
          order.status === "Pending"
            ? "bg-lightOrange text-darkOrange"
            : "bg-lightGreen text-darkGreen"
        }`}
      >
        {order.status}
      </p>
    ),
    actions: (
      <OrdersActions
        orderId={order._id}
        orderStatus={JSON.parse(JSON.stringify(order.status))}
      />
    ),
    expandedContent: order.items.map((item) => (
      <div
        key={item._id}
        className="bg-lightGray p-2 border flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px]">
            <Image
              src={item.productId.image}
              width={50}
              height={50}
              alt="product image"
              priority
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <p className="line-clamp-2">{item.productId.title}</p>
        </div>
        <div className="flex items-center justify-between gap-10">
          <p className="text-p1 font-medium">×{item.quantity}</p>
          <p>${item.quantity * item.cost}</p>
        </div>
      </div>
    )),
  }));