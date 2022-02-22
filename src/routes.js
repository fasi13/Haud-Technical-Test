import { LandingPage } from "./components/LandingPage/LandingPage.component";
import { CreateUser } from "./components/Users/CreateUser.component";

const routes = [
  {
    path: "/",
    element: LandingPage,
  },
  {
    path: "/create-user",
    element: CreateUser,
  },
  {
    path: "/edit-user/:userId",
    element: CreateUser,
  },
];

export default routes;
