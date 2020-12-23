import SearchContent from "./pages/SearchContent/SearchContent";
import Center from "./pages/Center/Center";

const routes = [
  { path: "/", name: "Home", component: SearchContent },
  { path: "/contents", name: "Contents", component: SearchContent },
  { path: "/centers", name: "Centers", component: Center },
];

export default routes;
