import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>Route Not Found!</p>
      <Link href="/dashboard">Go To Dashboard</Link>
    </div>
  );
};

export default NotFound;
