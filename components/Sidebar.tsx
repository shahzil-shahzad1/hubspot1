"use client"
import Image from 'next/image';
import { useState } from 'react';

const Icons = [
    {image: "/bookmark.png", name: ""},
    {image: "/crm.png", name: "dashboard"},
    {image: "/marketing.png", name: "contacts"},
    {image: "/content.png", name: "marketing"},
    {image: "/slaes.png", name: "sales"},
    {image: "/commerce.png", name: "commerce"},
    {image: "/service.png", name: "service"},
    {image: "/database.png", name: "management"},
    {image: "/automation.png", name: "automation"},
    {image: "/reporting.png", name: "reports"},
]

const Sidebar = () => {
    const sidebarItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      number: 1,
      content: [
           "Overview",
           "Performance",
           "Analytics",
           "Custom Reports",
      ]
    },
    {
      id: 'contacts',
      title: 'Contacts',
      number: 2,
      content: [
           "All Contacts",
           "Create Contact",
           "Lists",
           "Segments",
           "Import Contacts",
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      number: 3,
      content: [
           "Email",
           "Ads",
           "Landing Pages",
           "Forms",
           "Social Media",
      ]
    },
    {
      id: 'sales',
      title: 'Sales',
      number: 4,
      content: [
           "Deals",
           "Tasks",
           "Meetings",
           "Quotes",
           "Products",
      ],
    },
    {
      id: 'commerce',
      title: 'Commerce',
      number: 5,
      content: [
           "Deals",
           "Tasks",
           "Meetings",
           "Quotes",
           "Products",
      ]
    },
    {
      id: 'service',
      title: 'Service',
      number: 6,
      content: [
           "Tickets",
           "Knowledge Base",
           "Feedback",
           "Customer Portal",
      ],
    },
    {
      id: 'management',
      title: 'Management',
      number: 7,
      content: [
           "Tickets",
           "Knowledge Base",
           "Feedback",
           "Customer Portal",
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      number: 8,
      content: [
           "Workflows",
           "Sequences",
           "Bots",
           "Journeys",
      ]
    },
    {
      id: 'reports',
      title: 'Reports',
      number: 9,
      content: [
           "Dashboards",
           "Analytics",
           "Custom Reports",
           "Export Data",
      ]
    },
  ];

  const [activeItem, setActiveItem] = useState("")
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[#2d3e50] flex flex-col items-center py-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="text-pink-500 w-8 h-8 rounded">BS</div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-3">
            {Icons.map((icon, index)=>(
        <button key={index} className="relative text-gray-500 p-2 rounded-lg hover:bg-[#425b76] cursor-pointer" onMouseEnter={()=> setActiveItem(icon.name)} onMouseLeave={()=> setActiveItem("empty")}>
                <Image src={icon.image} height={17} width={17} alt='Icon' className='cursor-pointer invert' />
                {activeItem == icon.name && sidebarItems.map((item) => (
            item.id === icon.name && (
            <div
              key={item.id}
              className={`absolute left-[34px] z-[10px] w-42 bg-[#445668] shadow-lg rounded-lg py-8 px-2`}
              style={{ top: item.number > 6 ? '-160px' : '-60px' }}
            >
              <h3 className="text-gray-50 text-start font-semibold text-[17px] pb-5 px-3">{item.title}</h3>
              <div className="flex flex-col justify-center items-start gap-1">
                {Array.isArray(item.content) ? item.content.map((contentItem, index) => (
                  <a href={`/${contentItem.toLowerCase()}`} key={index} className="text-gray-50 text-[15px] py-2 px-3 rounded-lg hover:bg-[#768EA7] w-full text-start">{contentItem}</a>
                )): ""}
                </div>
            </div>
            )
        ))}
        </button>
              ))}
      </nav>
    </div>
  );
};

export default Sidebar;
