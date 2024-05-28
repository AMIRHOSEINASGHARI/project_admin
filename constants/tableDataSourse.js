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
import CommentAction from "@/components/pages/shared/CommentAction";
import CustomBadge from "@/components/shared/CustomBadge";

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
    status: (
      <CustomBadge
        condition={product.published}
        title={product.published ? "Published" : "Draft"}
      />
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

export const orderCheckoutSummaryDataSourse = (items) =>
  items.map((item) => ({
    key: item.productId._id,
    product: (
      <Image
        src={item.productId.image}
        width={50}
        height={50}
        alt={shorterText(item.productId.title, 20)}
        priority
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
          src={comment.senderId.avatar || images.person}
          width={40}
          height={40}
          alt="user"
          priority
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
          src={user.avatar || images.person}
          width={40}
          height={40}
          alt="user"
          priority
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
              src={like.product.image}
              width={50}
              height={50}
              alt="product"
              priority
              className="rounded-lg w-[50px] h-[50px]"
            />
            <p>{shorterText(like.product.title, 15)}</p>
          </div>
        </Link>
      ) : (
        <Link href={`/blogs/${like.blog._id}`}>
          <div className="flex items-center gap-3">
            <Image
              src={like.blog.image}
              width={50}
              height={50}
              alt="product"
              priority
              className="rounded-lg w-[50px] h-[50px]"
            />
            <p>{shorterText(like.product.title, 15)}</p>
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

export const adminsDataSourse = (admins, currentUserID) =>
  admins.map((admin) => ({
    key: admin._id,
    name: (
      <div className="flex items-center gap-3">
        {currentUserID === admin._id && (
          <span className="bg-lightBlue text-darkBlue rounded-btn py-1 px-3 text-p2 font-medium border border-darkBlue">
            YOU
          </span>
        )}
        <Image
          src={admin.avatar || images.admin}
          width={100}
          height={100}
          alt="admin"
          priority
          className="rounded-full w-[50px] h-[50px]"
        />
        <div>
          <p className="text-p1 font-medium">{admin.username}</p>
          {admin.name && <p className="text-p2 text-darkGray">{admin.name}</p>}
        </div>
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
    action: "",
  }));
