"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type RouteProps = {
  name: string;
  route: string;
  isActive: boolean;
};

const routes: Omit<RouteProps, "isActive">[] = [
  {
    name: "Controle",
    route: "/dashboard",
  },
  {
    name: "Controle",
    route: "/control",
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const { push } = useRouter();

  const [visibility, setVisibility] = useState(true);

  const toggleSideBar = () => setVisibility((prevState) => !prevState);

  return (
    <div
      className={classNames(
        "flex justify-center h-screen 3s ease-in-out duration-200 "
      )}
    >
      <div
        className={classNames(
          visibility ? "" : "",
          "h-full border-r border-gray-100 fixed top-0 left-0 z-20"
        )}
      >
        {routes?.map((route) => (
          <Route isActive={route.route === pathName} {...route} />
        ))}
      </div>
      <div className="w-4 h-4 bg-red-500 self-center" onClick={toggleSideBar} />
    </div>
  );
}

const Route = ({ name, route, isActive }: RouteProps) => {
  return (
    <Link href={route} className="outline-blue-200">
      <div
        className={classNames(
          isActive ? "bg-blue-100" : "hover:bg-blue-50 cursor-pointer",
          "flex items-center pl-4 pr-16 py-2"
        )}
      >
        <DocumentTextIcon
          className={classNames(
            isActive ? "text-blue-500" : "text-gray-400",
            "w-5 h-5 mr-3"
          )}
        />
        <span
          className={classNames(
            isActive ? "font-semibold" : "text-gray-400",
            "text-sm"
          )}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};
