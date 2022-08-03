import Collection from "pages/collection";
import Home from "pages/home";
import ShopPage from "pages/shop";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/collection",
    component: Collection,
  },
  {
    path: "/shop",
    component: ShopPage,
  },
];
export const privateRoutes = [];
