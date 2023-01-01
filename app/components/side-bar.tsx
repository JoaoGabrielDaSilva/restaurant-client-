"use client";
import {
  ChevronDownIcon,
  DocumentTextIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";

import { RiEBikeLine } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSideBar } from "../../src/store/side-bar";
import { IconType } from "react-icons/lib/esm/iconBase";
import { signOut } from "next-auth/react";
import { Transition } from "@headlessui/react";
import Modal from "./modal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type RouteProps = {
  name: string;
  route: string;
  isActive: boolean;
  icon: IconType;
};

const routes: Omit<RouteProps, "isActive">[] = [
  {
    name: "Controle",
    route: "/control",
    icon: HiOutlineClipboardList,
  },
  {
    name: "Cardápio",
    route: "/menu",
    icon: DocumentTextIcon,
  },
  {
    name: "Entregas",
    route: "/deliveries",
    icon: RiEBikeLine,
  },
  {
    name: "Estoque",
    route: "/stock",
    icon: ArchiveBoxIcon,
  },
  {
    name: "Fila",
    route: "/queue",
    icon: UserGroupIcon,
  },
];

export default function Sidebar() {
  const { isVisible, close } = useSideBar();

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;

      if (width >= 768 && isVisible) {
        close();
      }
    })
  );

  useEffect(() => {
    const windowRef = document.querySelector("body");
    if (windowRef) {
      observer.current.observe(windowRef);
    }

    return () => {
      if (windowRef) observer.current.unobserve(windowRef);
    };
  }, [observer]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <Modal isOpen onBackdropClick={close}>
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100%" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <SideBarBody />
          </motion.div>
        </Modal>
      ) : (
        <div className="hidden md:block">
          <SideBarBody />
        </div>
      )}
    </AnimatePresence>
  );
}

const Route = ({ name, route, icon: Icon, isActive }: RouteProps) => {
  return (
    <Link href={route} className="outline-blue-200">
      <div
        className={classNames(
          isActive ? "bg-blue-100" : "hover:bg-blue-50 cursor-pointer",
          "flex items-center pl-4 pr-16 py-2 rounded-md mb-3"
        )}
      >
        <Icon
          className={classNames(
            isActive ? "text-blue-700" : "text-gray-400",
            "w-5 h-5 mr-3 text-md"
          )}
        />
        <span
          className={classNames(
            isActive ? "font-semibold" : "text-gray-400",
            "text-md"
          )}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};

const SideBarBody = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-fit h-screen scrollbar-hide">
      <div className="bg-blue-500 text-sm text-white py-4 px-4 flex items-center w-full ">
        <div className="aspect-square w-10 h-10 bg-blue-900 rounded-full flex justify-center items-center mr-2">
          <span className="font-bold">B</span>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center">
            <span className="text-[1.1rem] font-semibold">Bar tapps</span>
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </Menu.Button>
          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-2 py-2 flex flex-col">
                <Menu.Item>
                  <button
                    className="text-black text-left"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/sign-in",
                      })
                    }
                  >
                    Logout
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="text-black text-left"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/sign-in",
                      })
                    }
                  >
                    Logout
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="text-black text-left"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/sign-in",
                      })
                    }
                  >
                    Logout
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="text-black text-left"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/sign-in",
                      })
                    }
                  >
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className=" border-r border-gray-300 px-4 pt-2 ">
        {routes?.map((route, index) => (
          <Route key={index} isActive={route.route === pathName} {...route} />
        ))}
      </div>
    </div>
  );
};
