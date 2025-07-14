import SearchIcon from "./SearchIcon";
import Image from "next/image";
const Icons=[
    "/home.png",
    "/question.png",
    "/settings.png",
    "/notification.png",
]
const TopBar = () => {
  return (
    <header className="bg-[#2d3e50] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">

        {/* Center section */}
        <div className="flex gap-2">
        <div className="relative flex-1 w-[35rem]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="text-white h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search HubSpot"
            className="w-full pl-10 pr-4 py-[7px] text-md bg-[#2c4566] border border-[#445668] focus:outline-none focus:ring-1 rounded-xl focus:ring-blue-500 focus:border-blue-500 placeholder:text-white"
          />
        </div>
        </div>
          <button className="border border-[#425b76] px-[10px] py-[.3px] cursor-pointer hover:bg-[#425b76] rounded-full text-[23px]">
            +
          </button>
        {/* Right section */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-200 text-sm font-medium py-1 px-3 hover:bg-[#425b76] rounded-md cursor-pointer">
            Upgrade
          </button>

        {/* Icons section */}

        <div className="flex items-center justify-center gap-5">
            <button className="p-2 rounded-lg hover:bg-[#425b76]">
            <Image src="/call.png" className="w-3 h-3 invert cursor-pointer hover:invert-75" height={12} width={12} alt="calling icon"/>
            </button>
            {Icons.map((icon, index)=>(
                <button key={index} className="text-gray-500 p-2 rounded-lg hover:bg-[#425b76]  cursor-pointer">
                <Image src={icon} height={16} width={16} alt={icon} key={index} className="w-4 h-4 invert"/>
                </button>
            ))}
        </div>
          <button className="text-gray-200 text-sm font-medium py-1 px-3 hover:bg-[#425b76] rounded-md cursor-pointer">
            Copilot
          </button>
          <div className="text-gray-200 text-sm font-medium py-1 px-3 hover:bg-[#425b76] rounded-md cursor-pointer">
            <span className="text-gray-200 text-sm font-medium">Largify Solutions</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;