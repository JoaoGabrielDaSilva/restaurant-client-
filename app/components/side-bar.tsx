"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div
      className={
        "hidden md:block max-w-[15vw] min-w-fit flex-grow h-screen border-r border-gray-200"
      }
    >
      {routes?.map((route, index) => (
        <Route key={index} isActive={route.route === pathName} {...route} />
      ))}
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
