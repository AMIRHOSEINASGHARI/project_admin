// components
import {
  Home,
  AddFolder,
  AddUser,
  Bell,
  BlogText,
  BorderHeart,
  Category,
  CircleCheck,
  CircleClose,
  Clock,
  Close,
  Comment,
  CreditCard,
  Dark,
  Date,
  Document,
  Dollar,
  DollarBag,
  DownAngle,
  Edit,
  ExchangeCrypto,
  EyeClosed,
  EyeOpen,
  Filter,
  Gallery,
  Headphone,
  LayerPlus,
  LeftAngle,
  Light,
  Location,
  LockClosed,
  LockOpen,
  MenuBars,
  MenuDots,
  Paragraph,
  Paypal,
  Power,
  Radar,
  RightAngle,
  Search,
  Settings,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Task,
  Trash,
  TrendDown,
  TrendUp,
  Truck,
  UpAngle,
  User,
  Users,
  Camera,
  Television,
  Printer,
  Mobile,
  Speaker,
  Laptop,
  Gaming,
  Tablet,
  Watch,
  UploadIcon,
  Discount,
  Stock,
  Brand,
} from "@/components/icons/Icons";

export const images = {
  logo: "/images/logo1.svg",
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person: "/images/man.png",
  notFound: "/images/404.svg",
  notAllowed: "/images/not-allowed.png",
};

export const icons = {
  home: <Home />,
  deliveryTruck: <Truck />,
  layerPlus: <LayerPlus />,
  addUser: <AddUser />,
  dollar: <Dollar />,
  basket: <ShoppingBasket />,
  shoppingBag: <ShoppingBag />,
  status: <Radar />,
  cart: <ShoppingCart />,
  plus: <AddFolder />,
  paper: <Comment />,
  users: <Users />,
  user: <User />,
  textB: <BlogText />,
  tasks: <Task />,
  notification: <Bell />,
  settings: <Settings />,
  power: <Power />,
  search: <Search />,
  close: <Close />,
  moon: <Dark />,
  sun: <Light />,
  trash: <Trash />,
  pen: <Edit />,
  document: <Document />,
  upload: <UploadIcon />,
  heart: <BorderHeart />,
  leftAngle: <LeftAngle />,
  rightAngle: <RightAngle />,
  upAngle: <UpAngle />,
  downAngle: <DownAngle />,
  menu: <MenuBars />,
  dots: <MenuDots />,
  paragraph: <Paragraph />,
  gallery: <Gallery />,
  clock: <Clock />,
  closedLock: <LockClosed />,
  openedLock: <LockOpen />,
  trandUp: <TrendUp />,
  trandDown: <TrendDown />,
  category: <Category />,
  roundCheck: <CircleCheck />,
  roundClose: <CircleClose />,
  filter: <Filter />,
  location: <Location />,
  creditCard: <CreditCard />,
  paypal: <Paypal />,
  dollarBag: <DollarBag />,
  eyeOpen: <EyeOpen />,
  eyeClosed: <EyeClosed />,
  exchangeCrypto: <ExchangeCrypto />,
  headphone: <Headphone />,
  camera: <Camera />,
  watch: <Watch />,
  tablet: <Tablet />,
  mobile: <Mobile />,
  speaker: <Speaker />,
  lapotp: <Laptop />,
  gaming: <Gaming />,
  printer: <Printer />,
  television: <Television />,
};

export const menuLinks = [
  {
    title: "Dashboard",
    image: icons.home,
    link: "/dashboard",
  },
  {
    title: "Orders",
    image: icons.deliveryTruck,
    link: "/orders",
  },
  {
    title: "Products",
    image: icons.basket,
    link: "/products",
  },
  {
    title: "Add Product",
    image: icons.plus,
    link: "/add-product",
  },
  {
    title: "Comments",
    image: icons.paper,
    link: "/comments",
  },
  {
    title: "Users",
    image: icons.users,
    link: "/users",
  },
  {
    title: "Blogs",
    image: icons.textB,
    link: "/blogs",
  },
  {
    title: "Add Blog",
    image: icons.paragraph,
    link: "/add-blog",
  },
  {
    title: "Tasks",
    image: icons.tasks,
    link: "/tasks",
  },
  {
    title: "Crypto",
    image: icons.exchangeCrypto,
    link: "/crypto",
  },
  {
    title: "Account",
    image: icons.settings,
    link: "/account",
  },
];

export const categories = [
  {
    image: icons.camera,
    title: "Camera",
    query: "camera",
  },
  {
    image: icons.gaming,
    title: "Gaming",
    query: "gaming",
  },
  {
    image: icons.headphone,
    title: "Headphone",
    query: "headphone",
  },
  {
    image: icons.lapotp,
    title: "Laptop",
    query: "laptop",
  },
  {
    image: icons.mobile,
    title: "Phone",
    query: "phone",
  },
  {
    image: icons.printer,
    title: "Printer",
    query: "printer",
  },
  {
    image: icons.speaker,
    title: "Speaker",
    query: "speaker",
  },
  {
    image: icons.tablet,
    title: "Tablet",
    query: "tablet",
  },
  {
    image: icons.television,
    title: "TV",
    query: "tv",
  },
  {
    image: icons.watch,
    title: "Watch",
    query: "watch",
  },
];

export const productInformationDetails = (info) => [
  {
    name: "Price:",
    value: `$${info?.price.toLocaleString()}`,
    icon: (
      <Dollar
        className="text-darkGray"
        wrapperClassName="cardShadow rounded-lg p-3"
      />
    ),
  },
  {
    name: "Discount:",
    value: `%${info?.discount.toLocaleString()}`,
    icon: (
      <Discount
        className="text-darkGray"
        wrapperClassName="cardShadow rounded-lg p-3"
      />
    ),
  },
  {
    name: "Stock:",
    value: info?.stock.toLocaleString(),
    icon: (
      <Stock
        className="text-darkGray"
        wrapperClassName="cardShadow rounded-lg p-3"
      />
    ),
  },
  {
    name: "Brand:",
    value: info?.brand,
    icon: (
      <Brand
        className="text-darkGray"
        wrapperClassName="cardShadow rounded-lg p-3"
      />
    ),
  },
  {
    name: "Category:",
    value: info?.category,
    icon: (
      <Category
        className="text-darkGray"
        wrapperClassName="cardShadow rounded-lg p-3"
      />
    ),
  },
];

export const dashboardReviews = [
  {
    title: "Total Revenues",
    icon: <Dollar />,
    count: 576000,
    countClass: "text-green-500",
    iconClass: "text-green-500",
    profit: 15,
    link: "/",
  },
  {
    title: "Total Products",
    icon: <ShoppingBasket />,
    count: 16585,
    countClass: "text-blue-500",
    iconClass: "text-blue-500",
    profit: -5,
    link: "/",
  },
  {
    title: "Total Users",
    icon: <Users />,
    count: 102365,
    countClass: "text-gray-500",
    iconClass: "text-gray-500",
    profit: 12,
    link: "/",
  },
  {
    title: "Comments To Answer",
    icon: <Comment />,
    count: 3650,
    countClass: "text-orange-500",
    iconClass: "text-orange-500",
    profit: 63,
    link: "/",
  },
  {
    title: "New Orders",
    icon: <Truck />,
    count: 250,
    countClass: "text-purple-500",
    iconClass: "text-purple-500",
    profit: 18,
    link: "/",
  },
  {
    title: "Blogs",
    icon: <BlogText />,
    count: 9621,
    countClass: "text-indigo-500",
    iconClass: "text-indigo-500",
    profit: -3,
    link: "/",
  },
];

export const totalRevenueChartOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
  responsive: [
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 250,
        },
      },
    },
    {
      breakpoint: 500,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 600,
      options: {
        chart: {
          width: 400,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 500,
        },
      },
    },
    {
      breakpoint: 900,
      options: {
        chart: {
          width: 400,
        },
      },
    },
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: 500,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 600,
        },
      },
    },
    {
      breakpoint: 1280,
      options: {
        chart: {
          width: 800,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 600,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 700,
        },
      },
    },
    {
      breakpoint: 2000,
      options: {
        chart: {
          width: 800,
        },
      },
    },
    {
      breakpoint: 5000,
      options: {
        chart: {
          width: 1000,
        },
      },
    },
  ],
};

export const totalRevenueChartSeries = [
  {
    name: "Last Month",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: "Running Month",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];
