import { Fragment, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5/index";
import { Menu, Transition } from "@headlessui/react";

function HeaderComponent() {
  const headerItems = ["Home", "Project", "Bio"];
  const [click, setClick] = useState("Home");

  return (
    <Menu>
      <Menu.Button className="relative p-3 rounded-lg border border-gray-400 dark:border-gray-600 dark:hover:bg-zinc-600 hover:bg-zinc-300 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 dark:focus:ring-violet-700 transition duration-300"
      aria-label="drop down menu">
        <IoMenu size={20}/>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-5 z-20 w-56 p-3 flex flex-col rounded-xl dark:bg-neutral-700 bg-neutral-400 dark:text-white text-black bg-opacity-30">
          {headerItems.map((item) => {
            const checkClick = item === click;
            return (
              <Menu.Item>
                {({ active }) => (<button onClick={() => setClick(item)}>
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      checkClick
                        ? "dark:bg-white dark:text-black bg-black text-white font-black"
                        : "hover:underline hover:decoration-2 hover:underline-offset-8"
                    } cursor-pointer w-[200px] h-[50px] px-5 flex items-center`}
                  >
                    {item}                  </a></button>

                )}
              </Menu.Item>
            );
          })}
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderComponent;
