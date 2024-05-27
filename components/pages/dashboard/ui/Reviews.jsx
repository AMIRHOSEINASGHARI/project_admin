// next
import Link from "next/link";
// constants
import { dashboardReviews } from "@/constants";
// cmp
import { TrendDown, TrendUp } from "@/components/icons/Icons";

const Reviews = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {dashboardReviews.map((el, i) => {
        const { title, icon, count, link, profit } = el;

        return (
          <div
            key={i}
            className="flex flex-1 min-w-[280px] border hover:shadow-inner bg-white rounded-3xl group transition-all duration-150"
          >
            <Link
              href={link}
              className="flex flex-col flex-1 w-full justify-between"
            >
              <div className="flex justify-between p-5 pb-8">
                <div>
                  <h1 className="font-light text-[14px]">{title}</h1>
                  <span className="font-bold text-[30px] text-gray-500">
                    {count.toLocaleString()}
                  </span>
                </div>
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center cardShadow transform group-hover:-rotate-45 Transition">
                  {icon}
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-200" />
              <div className="px-5 py-3">
                {profit > 0 && (
                  <div className="flex items-center gap-1">
                    <div className="text-green-500">
                      <TrendUp />
                    </div>
                    <span className="text-green-500">{profit}%</span>
                    <p className="text-[14px] font-light">
                      increase vs last month
                    </p>
                  </div>
                )}
                {profit < 0 && (
                  <div className="flex items-center gap-1">
                    <div className="text-red-500">
                      <TrendDown />
                    </div>
                    <span className="text-red-500">{profit}%</span>
                    <p className="text-[14px] font-light">
                      decrease vs last month
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
