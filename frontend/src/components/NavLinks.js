import {
  HomeIcon,
  NewspaperIcon,
  LoginIcon,
  UserAddIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

const links = [
  {
    routes: "/",
    name: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    routes: "about",
    name: "About",
    icon: <InformationCircleIcon className="h-5 w-5" />,
  },
  {
    routes: "news",
    name: "News",
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    routes: "login",
    name: "Login",
    icon: <LoginIcon className="h-5 w-5" />,
  },
  {
    routes: "register",
    name: "Register",
    icon: <UserAddIcon className="h-5 w-5" />,
  },
];

export { links };
