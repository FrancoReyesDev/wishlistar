import { Outlet } from "@remix-run/react";
import { userProfile } from "~/mock/userProfile";
import { Link, useLocation } from "@remix-run/react";
import React from "react";

interface AvatarProps {
  profileImage: string;
}

function Avatar({ profileImage }: AvatarProps) {
  return (
    <div className="avatar">
      <div className="w-20 rounded-full drop-shadow-xl ring ring-base-100 ">
        <object data={profileImage}>
          <img
            loading="lazy"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </object>
      </div>
    </div>
  );
}

interface HeadingsProps {
  userFullName: string;
  userAlias: string;
}

function Headings({ userFullName, userAlias }: HeadingsProps) {
  return (
    <div className="flex flex-col justify-end prose prose-h1:text-base prose-h1:leading-1 prose-h2:leading-none prose-h1:text-slate-600 prose-h1:font-normal prose-h2:text-2xl prose-h2:mb-0 ">
      <h2>{userFullName}</h2>
      <h1>
        <strong>{userAlias}</strong>
      </h1>
    </div>
  );
}

interface UserProfileHeaderProps {
  userProfile: {
    fullName: string;
    username: string;
    profileImage: string;
    bannerImage: string;
    badges: string[];
  };
}

function UserProfileHeader({ userProfile }: UserProfileHeaderProps) {
  return (
    <div className="flex gap-4 justify-start px-4 py-4 mt-4">
      <Avatar profileImage={userProfile.profileImage} />
      <Headings
        userAlias={userProfile.username}
        userFullName={userProfile.fullName}
      />
    </div>
  );
}

interface TabLinkProps {
  to: string;
  pathname: string;
  children: React.ReactNode;
}

function TabLink({ to, children, pathname }: TabLinkProps) {
  const tabActiveClassName =
    pathname === to ? "tab-active bg-base-100 shadow" : "";

  return (
    <Link to={to} className={"tab p-1 rounded " + tabActiveClassName}>
      {children}
    </Link>
  );
}

interface ProfileTabsProps {
  userId: string;
}

function ProfileTabs({ userId }: ProfileTabsProps) {
  const location = useLocation();

  return (
    <div
      role="tablist"
      className="tabs my-4 prose prose-a:no-underline prose-a:font-medium prose-a:text-base bg-base-300 rounded p-1 border "
    >
      <TabLink to={`/${userId}/wishlists`} pathname={location.pathname}>
        Wishlists
      </TabLink>
      <TabLink to={`/${userId}/activities`} pathname={location.pathname}>
        Activities
      </TabLink>
    </div>
  );
}

export default function UserProfile() {
  return (
    <div className="container mx-auto px-4">
      <UserProfileHeader userProfile={userProfile} />
      <ProfileTabs userId="prueba" />
      <div className="px-8 py-4 ">
        <Outlet />
      </div>
    </div>
  );
}
