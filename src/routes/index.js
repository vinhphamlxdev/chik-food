import Blog from "pages/blog";
import CartPage from "pages/cart";
import Checkout from "pages/checkout";
import CheckoutSuccess from "pages/checkout/CheckoutSuccess";
import Collection from "pages/collection";
import Home from "pages/home";
import ShopPage from "pages/shop";
import SignIn from "pages/signIn";
import SignUp from "pages/signUp";

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
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/checkout/:id",
    component: CheckoutSuccess,
  },
];
export const privateRoutes = [];
