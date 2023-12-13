import React from "react";
import SidebarTab from "./SidebarTab";
import { FaCube, FaCartShopping,FaPeopleGroup,FaBoxArchive  } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="fixed right-28 my-28 w-[15vw]">
      <div className="border border-gray-200 py-10 px-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold px-8">Discover</h2>
        <SidebarTab
          icon={<FaCube />}
          title={"Business Intelligence"}
          description={
            "Historical, current and predictive views of business operations."
          }
        />
        <SidebarTab
          icon={<FaCartShopping />}
          title={"Commerce"}
          description={"Systems, goods and services, small and large scale."}
        />
                <SidebarTab
          icon={<FaPeopleGroup />}
          title={"Human Resources"}
          description={"About the people who make up the workforce of an organisation."}
        />
                        <SidebarTab
          icon={<FaBoxArchive />}
          title={"Internet of Things"}
          description={"Human-to-human and human-to-computer interaction."}
        />
      </div>
    </div>
  );
}
