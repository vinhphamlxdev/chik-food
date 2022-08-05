import CartPage from "pages/cart";
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
  {
    path: "/cart",
    component: CartPage,
  },
];
export const privateRoutes = [];
