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
  admin: "/images/admin-1.jpg",
  admin2: "/images/admin-2.jpg",
  admin3: "/images/admin-3.jpg",
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
    title: "Crypto",
    image: icons.exchangeCrypto,
    link: "/crypto",
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
    image: icons.layerPlus,
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
    count: 576000,
    profit: 15,
    chartData: [
      {
        month: "Jan 21",
        Performance: 3000,
      },
      {
        month: "Feb 21",
        Performance: 3100,
      },
      {
        month: "Mar 21",
        Performance: 2500,
      },
      {
        month: "Apr 21",
        Performance: 2780,
      },
      {
        month: "May 21",
        Performance: 1890,
      },
      {
        month: "Jun 21",
        Performance: 3000,
      },
      {
        month: "Jul 21",
        Performance: 3200,
      },
    ],
  },
  {
    title: "Total Products",
    count: 16585,
    profit: -5,
    chartData: [
      {
        month: "Jan 21",
        Performance: 1000,
      },
      {
        month: "Feb 21",
        Performance: 2000,
      },
      {
        month: "Mar 21",
        Performance: 2000,
      },
      {
        month: "Apr 21",
        Performance: 2780,
      },
      {
        month: "May 21",
        Performance: 1890,
      },
      {
        month: "Jun 21",
        Performance: 2390,
      },
      {
        month: "Jul 21",
        Performance: 2000,
      },
    ],
  },
  {
    title: "Total Users",
    count: 102365,
    profit: 12,
    chartData: [
      {
        month: "Jan 21",
        Performance: 4000,
      },
      {
        month: "Feb 21",
        Performance: 3000,
      },
      {
        month: "Mar 21",
        Performance: 2000,
      },
      {
        month: "Apr 21",
        Performance: 2780,
      },
      {
        month: "May 21",
        Performance: 1890,
      },
      {
        month: "Jun 21",
        Performance: 2390,
      },
      {
        month: "Jul 21",
        Performance: 3490,
      },
    ],
  },
  {
    title: "Comments To Answer",
    count: 3650,
    profit: 63,
    chartData: [
      {
        month: "Jan 21",
        Performance: 1500,
      },
      {
        month: "Feb 21",
        Performance: 3000,
      },
      {
        month: "Mar 21",
        Performance: 6000,
      },
      {
        month: "Apr 21",
        Performance: 2780,
      },
      {
        month: "May 21",
        Performance: 1890,
      },
      {
        month: "Jun 21",
        Performance: 2390,
      },
      {
        month: "Jul 21",
        Performance: 3500,
      },
    ],
  },
  {
    title: "Total Orders",
    count: 4500,
    profit: -8,
    chartData: [
      {
        month: "Jan 21",
        Performance: 2518,
      },
      {
        month: "Feb 21",
        Performance: 1429,
      },
      {
        month: "Mar 21",
        Performance: 1068,
      },
      {
        month: "Apr 21",
        Performance: 2077,
      },
      {
        month: "May 21",
        Performance: 2782,
      },
      {
        month: "Jun 21",
        Performance: 1987,
      },
      {
        month: "Jul 21",
        Performance: 1800,
      },
    ],
  },
  {
    title: "Blogs",
    count: 2000,
    profit: 10,
    chartData: [
      {
        month: "Jan 21",
        Performance: 2488,
      },
      {
        month: "Feb 21",
        Performance: 1520,
      },
      {
        month: "Mar 21",
        Performance: 2330,
      },
      {
        month: "Apr 21",
        Performance: 1687,
      },
      {
        month: "May 21",
        Performance: 3918,
      },
      {
        month: "Jun 21",
        Performance: 3541,
      },
      {
        month: "Jul 21",
        Performance: 3664,
      },
    ],
  },
  {
    title: "Exchanges",
    count: 3760,
    profit: -19,
    chartData: [
      {
        month: "Jan 21",
        Performance: 3547,
      },
      {
        month: "Feb 21",
        Performance: 1759,
      },
      {
        month: "Mar 21",
        Performance: 2233,
      },
      {
        month: "Apr 21",
        Performance: 1430,
      },
      {
        month: "May 21",
        Performance: 2893,
      },
      {
        month: "Jun 21",
        Performance: 1852,
      },
      {
        month: "Jul 21",
        Performance: 1287,
      },
    ],
  },
  {
    title: "Tickets",
    count: 6805,
    profit: 50,
    chartData: [
      {
        month: "Jan 21",
        Performance: 3277,
      },
      {
        month: "Feb 21",
        Performance: 3857,
      },
      {
        month: "Mar 21",
        Performance: 1637,
      },
      {
        month: "Apr 21",
        Performance: 3919,
      },
      {
        month: "May 21",
        Performance: 3165,
      },
      {
        month: "Jun 21",
        Performance: 1058,
      },
      {
        month: "Jul 21",
        Performance: 2306,
      },
    ],
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

export const last7DaysGrowChartSeries = [
  {
    day: "1",
    Price: 3000,
  },
  {
    day: "2",
    Price: 3100,
  },
  {
    day: "3",
    Price: 2500,
  },
  {
    day: "4",
    Price: 2780,
  },
  {
    day: "5",
    Price: 1890,
  },
  {
    day: "6",
    Price: 3000,
  },
];

export const last7DaysDownChartSeries = [
  {
    day: "1",
    Price: 1000,
  },
  {
    day: "2",
    Price: 2000,
  },
  {
    day: "3",
    Price: 2000,
  },
  {
    day: "4",
    Price: 2780,
  },
  {
    day: "5",
    Price: 1890,
  },
  {
    day: "6",
    Price: 2390,
  },
  {
    day: "7",
    Price: 2000,
  },
];
