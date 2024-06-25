// next
import NextImage from "next/image";
import Link from "next/link";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { images, last7DaysDownChartSeries, last7DaysGrowChartSeries } from ".";
// cmp
import { Image } from "@nextui-org/image";
import moment from "moment";
import OrdersActions from "@/components/pages/orders/ui/OrdersActions";
import CommentAction from "@/components/pages/shared/CommentAction";
import CustomBadge from "@/components/shared/CustomBadge";
import AdminActions from "@/components/pages/account/ui/tabs/admins/AdminActions";
import ProductActions from "@/components/pages/products/ui/ProductActions";
import { TrendDown, TrendUp } from "@/components/icons/Icons";
import { SparkAreaChart } from "@tremor/react";

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
            as={NextImage}
            src={product.image}
            width={100}
            height={100}
            alt="product"
          />
        </div>
        <div>
          <p>{shorterText(product.title, 15)}...</p>
          <p>In {product.category}</p>
        </div>
      </Link>
    ),
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
    status: (
      <CustomBadge
        condition={product.published}
        title={product.published ? "Published" : "Draft"}
      />
    ),
    creator: (
      <Link
        href={`/account/admins/${product.createdBy._id}`}
        className="flex items-center flex-col xl:flex-row gap-3"
      >
        <div className="w-10 h-10">
          <Image
            as={NextImage}
            src={product.createdBy.avatar || images.admin}
            width={200}
            height={200}
            alt="admin"
            className="rounded-full"
          />
        </div>
        <p className="text-p2 font-medium capitalize">
          {product.createdBy.name.split(" ")[0]}
        </p>
      </Link>
    ),
    actions: (
      <ProductActions productId={product._id} published={product.published} />
    ),
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
            as={NextImage}
            src={order.userId.avatar || images.person}
            width={35}
            height={35}
            alt={shorterText(order.userId.username, 8)}
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
      <CustomBadge
        condition={order.status === "Completed"}
        title={order.status}
      />
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
              as={NextImage}
              src={item.productId.image}
              width={50}
              height={50}
              alt="product image"
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

export const orderCheckoutSummaryDataSourse = (items) =>
  items.map((item) => ({
    key: item.productId._id,
    product: (
      <Image
        as={NextImage}
        src={item.productId.image}
        width={50}
        height={50}
        alt={shorterText(item.productId.title, 20)}
      />
    ),
    qty: item.quantity,
    unitPrice: `$${item.cost.toLocaleString()}`,
    amount: `$${(item.quantity * item.cost).toLocaleString()}`,
  }));

export const commentsDataSourse = (comments) =>
  comments.map((comment) => ({
    key: comment._id,
    id: `#${shorterText(comment._id, 10)}`,
    user: (
      <Link
        href={`/users/${comment.senderId._id}`}
        className="flex items-center gap-3"
      >
        <Image
          as={NextImage}
          src={comment.senderId.avatar || images.person}
          width={40}
          height={40}
          alt="user"
        />
        <div>
          <p className="text-p1 font-medium">{comment.senderId.username}</p>
          {comment.senderId.displayName && (
            <p className="text-p2 text-darkGray">
              {comment.senderId.displayName}
            </p>
          )}
        </div>
      </Link>
    ),
    status: (
      <CustomBadge
        condition={comment.published}
        title={comment.published ? "Published" : "Draft"}
      />
    ),
    isAnswered: (
      <CustomBadge
        condition={comment.status === "Answered"}
        title={comment.status}
      />
    ),
    date: moment(comment.createdAt).fromNow(),
    action: (
      <CommentAction
        _id={JSON.parse(JSON.stringify(comment._id))}
        answer={JSON.parse(JSON.stringify(comment.answer))}
        status={JSON.parse(JSON.stringify(comment.status))}
        published={JSON.parse(JSON.stringify(comment.published))}
      />
    ),
  }));

export const usersDataSourse = (users) =>
  users.map((user) => ({
    key: user._id,
    name: (
      <Link href={`/users/${user._id}`} className="flex items-center gap-3">
        <Image
          as={NextImage}
          src={user.avatar || images.person}
          width={40}
          height={40}
          alt="user"
        />
        <div>
          <p className="text-p1 font-medium">{user.username}</p>
          {user.displayName && (
            <p className="text-p2 text-darkGray">{user.displayName}</p>
          )}
        </div>
      </Link>
    ),
    phoneNumber: user.phoneNumber || "_",
    address: user.address || "_",
    orders:
      user.orders.length === 0 ? "_" : user.orders.length.toLocaleString(),
    comments:
      user.comments.length === 0 ? "_" : user.comments.length.toLocaleString(),
    likes: user.likes.length === 0 ? "_" : user.likes.length.toLocaleString(),
    cartStatus: (
      <CustomBadge
        condition={user.cart.totalProductsCount !== 0}
        title={user.cart.totalProductsCount === 0 ? "Empty" : "Fill"}
      />
    ),
    date: moment(user.createdAt).format("L"),
  }));

export const userOrdersDataSourse = (orders) =>
  orders.map((order) => ({
    key: order._id,
    _id: (
      <Link href={`/orders/${order._id}`}>#{shorterText(order._id, 8)}</Link>
    ),
    date: (
      <div>
        <p>{moment(order.createdAt).format("L")}</p>
        <p className="text-p2 text-darkGray">
          {moment(order.createdAt).format("LT")}
        </p>
      </div>
    ),
    totalProducts: order.summary.totalProducts,
    totalPayable: `$${order.summary.totalPayable.toLocaleString()}`,
    status: (
      <CustomBadge
        condition={order.status === "Completed"}
        title={order.status}
      />
    ),
  }));

export const userCommentsDataSourse = (comments) =>
  comments.map((comment) => ({
    key: comment._id,
    product: (
      <Link href={`/products/${comment.productId._id}`}>
        #{shorterText(comment.productId._id, 8)}
      </Link>
    ),
    date: (
      <div>
        <p>{moment(comment.createdAt).format("L")}</p>
        <p className="text-p2 text-darkGray">
          {moment(comment.createdAt).format("LT")}
        </p>
      </div>
    ),
    title: <p className="text-p2">{shorterText(comment.title, 20)}</p>,
    isAnswered: (
      <CustomBadge
        condition={comment.status === "Answered"}
        title={comment.status}
      />
    ),
    status: (
      <CustomBadge
        condition={comment.published}
        title={comment.published ? "Published" : "Draft"}
      />
    ),
    actions: (
      <CommentAction
        _id={JSON.parse(JSON.stringify(comment._id))}
        answer={JSON.parse(JSON.stringify(comment.answer))}
        status={JSON.parse(JSON.stringify(comment.status))}
        published={JSON.parse(JSON.stringify(comment.published))}
      />
    ),
  }));

export const userLikesDataSourse = (likes) =>
  likes.map((like) => ({
    key: like._id,
    type: <p className="capitalize">{like.type}</p>,
    name:
      like.type === "product" ? (
        <Link href={`/products/${like.product._id}`}>
          <div className="flex items-center gap-3">
            <Image
              as={NextImage}
              src={like.product.image}
              width={50}
              height={50}
              alt="product"
              className="rounded-lg w-[50px] h-[50px]"
            />
            <p>{shorterText(like.product.title, 15)}</p>
          </div>
        </Link>
      ) : (
        <Link href={`/blogs/${like.blog._id}`}>
          <div className="flex items-center gap-3">
            <Image
              as={NextImage}
              src={like.blog.image}
              width={50}
              height={50}
              alt="product"
              className="rounded-lg w-[50px] h-[50px]"
            />
            <p>{shorterText(like.blog.title, 15)}</p>
          </div>
        </Link>
      ),
    date: (
      <div>
        <p>{moment(like.createdAt).format("L")}</p>
        <p className="text-p2 text-darkGray">
          {moment(like.createdAt).format("LT")}
        </p>
      </div>
    ),
  }));

export const blogsDataSourse = (blogs) =>
  blogs.map((blog) => ({
    key: blog._id,
    id: <Link href={`/blogs/${blog._id}`}>#{shorterText(blog._id, 8)}</Link>,
    name: <p>{shorterText(blog.title, 50)}</p>,
    status: (
      <CustomBadge
        condition={blog.published}
        title={blog.published ? "Published" : "Draft"}
      />
    ),
    likes: blog.likes.length === 0 ? "_" : blog.likes.length.toLocaleString(),
    date: (
      <div>
        <p>{moment(blog.createdAt).format("L")}</p>
        <p className="text-p2 text-darkGray">
          {moment(blog.createdAt).format("LT")}
        </p>
      </div>
    ),
  }));

export const adminsDataSourse = (admins, currentUserID, currentUserRoll) =>
  admins.map((admin) => ({
    key: admin._id,
    avatar: (
      <div className="w-12 h-12">
        <Image
          as={NextImage}
          src={admin.avatar || images.admin}
          width={100}
          height={100}
          alt="admin"
          radius="full"
        />
      </div>
    ),
    name: (
      <div>
        <p className="text-p1 font-medium">
          {admin.username}{" "}
          {currentUserID === admin._id && (
            <span className="bg-lightBlue text-darkBlue rounded-btn py-.5 px-2 text-p2 font-medium border border-darkBlue">
              YOU
            </span>
          )}
        </p>
        {admin.name && <p className="text-p2 text-darkGray">{admin.name}</p>}
      </div>
    ),
    phone: admin.phoneNumber || "_",
    roll: (
      <CustomBadge
        condition={admin.roll === "OWNER" || admin.roll === "ADMIN"}
        title={admin.roll}
      />
    ),
    date: (
      <div>
        <p>{moment(admin.createdAt).format("L")}</p>
        <p className="text-p2 text-darkGray">
          {moment(admin.createdAt).format("LT")}
        </p>
      </div>
    ),
    action: (
      <AdminActions
        roll={admin.roll}
        userId={admin._id}
        showMore={currentUserRoll === "OWNER" && admin.roll !== "OWNER"}
      />
    ),
  }));

export const upcommingEventsDataSourse = (events) =>
  events.map((event) => ({
    key: event._id,
    date: moment(event.createdAt).format("MMM Do"),
    title: (
      <div className="space-y-1">
        <p>{event.title}</p>
        <p className="text-p2 bg-lightGray rounded-lg py-.5 px-2 border w-fit">
          {moment(event.dueDate).fromNow()}
        </p>
      </div>
    ),
    status: (
      <CustomBadge
        title={event.status}
        colors={
          event.status === "Todo"
            ? "text-darkBlue bg-lightBlue"
            : event.status === "Progress"
            ? "text-darkOrange bg-lightOrange"
            : "text-darkGreen bg-lightGreen"
        }
      />
    ),
  }));

export const coinsListDataSourse = (coins) =>
  coins.map((coin) => {
    const {
      id,
      name,
      image,
      symbol,
      total_volume,
      market_cap,
      market_cap_rank,
      current_price,
      circulating_supply,
      price_change_percentage_24h: priceChange,
      market_cap_change_percentage_24h: marketChange,
    } = coin;
    return {
      key: id,
      index: market_cap_rank,
      name: (
        <Link
          href={`/crypto/${id}`}
          className="flex items-center gap-2 mn-w-fit"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <Image
              as={NextImage}
              src={image}
              width={30}
              height={30}
              alt="coin"
              radius="full"
            />
          </div>
          <p className="text-p2 font-medium line-clamp-none">
            {name} <span className="uppercase text-gray-400">{symbol}</span>
          </p>
        </Link>
      ),
      price: <p>${current_price.toLocaleString()}</p>,
      price_last_24h: (
        <div
          className={`flex items-center gap-2 w-[100px] ${
            priceChange < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {priceChange >= 0 ? <TrendUp /> : <TrendDown />}
          <p>% {priceChange.toFixed(2)}</p>
        </div>
      ),
      market: (
        <div className="w-[150px]">
          <p>$ {market_cap.toLocaleString()}</p>
        </div>
      ),
      volume: (
        <div className="w-[150px]">
          <p>$ {total_volume.toLocaleString()}</p>
        </div>
      ),
      circulating_supply: <p>{circulating_supply.toLocaleString()}</p>,
      market_last_24h: (
        <div
          className={`flex items-center gap-2 w-[100px] ${
            marketChange < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {marketChange >= 0 ? <TrendUp /> : <TrendDown />}
          <p>% {marketChange.toFixed(2)}</p>
        </div>
      ),
      last_7: (
        <div className="w-[100px]">
          <SparkAreaChart
            data={
              marketChange >= 0
                ? last7DaysGrowChartSeries
                : last7DaysDownChartSeries
            }
            categories={["Price"]}
            index={"day"}
            colors={marketChange >= 0 ? ["green"] : ["red"]}
            className="h-[40px] w-full"
            showAnimation={true}
            animationDuration={1300}
          />
        </div>
      ),
    };
  });
