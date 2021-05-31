import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 flex-1 text-gray-400">
            <NavLink
              activeClassName="border-pink-500 text-white"
              to="/"
              className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-transparent hover:text-white hover:border-pink-500"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1 text-gray-400">
            <NavLink
              activeClassName="border-green-500 text-white"
              to="/financial-event"
              className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-transparent hover:text-white hover:border-green-500"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                Zdarzenie
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1 text-gray-400">
            <NavLink
              activeClassName="border-purple-500 text-white"
              to="/messages"
              className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-transparent hover:text-white hover:border-purple-500"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                Messages
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1 text-gray-400">
            <NavLink
              activeClassName="border-blue-600 text-white"
              to="/analytics"
              className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-transparent hover:text-white hover:border-blue-600"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                Analytics
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1 text-gray-400">
            <NavLink
              activeClassName="border-red-500 text-white"
              to="/payments"
              className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-transparent hover:text-white hover:border-red-500"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                Payments
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
