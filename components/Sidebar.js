import Image from "next/image";
import React from "react";
import SidebarLink from "./ui/SidebarLink";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex  xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <Image
          width={30}
          height={30}
          alt="Twitter Icon"
          src="/twitter-icon.jpg"
        />
      </div>
      <div className="mt-4 mb-2.5 space-y-2.5 xl:ml-24">
        <SidebarLink
          text="Home"
          Icon={HomeIcon}
          active={router.pathname === "/"}
          onClick={() => router.push("/")}
        />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardDocumentListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      <button className="ml-auto hidden h-[52px] w-56  rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-md hover:bg-[#1a8cd8] xl:inline">
        Tweet
      </button>
      <div
        className="hoverAnimation mt-auto flex items-center justify-center text-[#d9d9d9] xl:ml-auto xl:-mr-5"
        onClick={signOut}>
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#63767d]">@{session.user.tag}</p>
        </div>
        <EllipsisHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
