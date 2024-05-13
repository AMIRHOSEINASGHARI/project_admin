// components
import SignoutButton from "../SignoutButton";
import MobileNav from "./MobileNav";
import ShowProfile from "./ShowProfile";
import NavbarSearchBox from "../search/NavbarSearchBox";

const Navbar = () => {
  return (
    <header className="lg:backdrop-blur-xl max-lg:bg-white max-md:border-b border-b fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <SignoutButton />
          <NavbarSearchBox />
          <ShowProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
