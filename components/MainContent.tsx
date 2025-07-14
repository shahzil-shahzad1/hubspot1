// app/page.tsx
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    const marketingProgress = 50;
  const timeRemaining = "About 6 minutes left";
  const userguideslinks = [
    {title: 'View your plan', link: "/userid/plans", image1: "/square.png", image2: "/movingarrow.png"},
    {title: 'Invite your team', link: "/userid/inviteteams", image1: "/team.png", image2: "/alert.png"},
  ]

  const socials = [
    {link: "https://www.mail.com", image: "/mail.webp"},
    {link: "https://www.facebook.com", image: "/fb.webp"},
    {link: "https://www.zoom.com", image: "/zoom.webp"},
    {link: "https://www.meet.google.com", image: "/meet.webp"},
  ]
  return (
    <div className="flex ">
      {/* Middle Content Section */}
      <div className="w-[95.4%] ml-auto p-5 bg-gray-200 h-screen overflow-y-auto  flex gap-12 text-black justify-around rounded-tl-3xl">
        {/* User Guides Section */}
        <div className="bg-white py-4 px-4 w-[27%] pl-6">
          <h1 className="text-2xl font-bold mb-3 pl-2 text-[#313131]">User Guides</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 mb-8">
            {['Marketing Guide', 'Sales Guide', 'Customer Service Guide', 'Content Guide', 'Commerce Guide'].map((guide) => (
              <div key={guide} className="bg-white py-3 px-4 w-full rounded-md cursor-pointer transition-all duration-100 hover:bg-blue-200 text-[#2c2c2c]">
                {guide}
              </div>
            ))}
          </div>
          {/* Action Links */}
          <div className="flex gap-1 mb-8 flex-col">
            {userguideslinks.map((guide, index)=>(
              <Link href={`${guide.link}`} key={index} className="bg-white py-3 flex justify-between px-4 w-full rounded-md cursor-pointer transition-all duration-100 hover:bg-blue-200 text-[#2c2c2c]">
              <div className="flex gap-3">
                <Image src={guide.image1} className="invert-[.1]" height={20} width={22} alt={guide.image1} />
                {guide.title}
              </div>
              <Image src={guide.image2} className="invert-[.1]" height={20} width={22} alt={guide.image1} />
            </Link>
            ))}
          </div>

          {/* Ready to connect section */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-[#313131] pl-2">Ready to connect:</h4>
            <div className="socials flex gap-2 justify-start pl-2">
              {
                socials.map((social, index)=>(
                  <Link href={social.link} key={index} className="border border-[#313131] bg-blue-200 p-[6px] transition-all duration-100 hover:bg-white rounded-md" >
                  <Image src={social.image} height={30} width={30} className="" alt={social.link} />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        <div className="py-4 px-6">

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Marketing tools progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-3.5 mb-2">
            <div
              className="bg-blue-600 h-3.5 rounded-md"
              style={{ width: `${marketingProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{marketingProgress}%</span>
            <span>{timeRemaining}</span>
          </div>
        </div>

        {/* Recommended Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Recommended: All you need to get started
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-[17px]">
            <div className="text-blue-300">Set up the basics</div>
            <div className="">
              Import your contacts, invite teammates, and understand HubSpot
              properties
            </div>
          </ul>
        </div>

        {/* Marketing Hub Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold">
            Attract new customers with Marketing Hub
          </h2>
          {/* Additional content would go here */}
        </div>
        </div>
      </div>
    </div>
  );
}