import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import NoteFoundPage from "../pages/NoteFoundPage";
import GuestLayout from "../layouts/GuestLayout";
import DefaultLayout from "../layouts/DefaultLyout";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/purchase",
    element: <PurchasePage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/refund",
    element: <RefundPage />,
  },
  {
    path: "/productdetails",
    element: <ProductDetailsPage />,
  },
  {
    path: "/*",
    element: <NoteFoundPage />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <UserLoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forget",
        element: <ForgetPasswordPage  />,
      },
      {
        path: "/reset/:id",
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
      {
        path: "/favourite",
        element: <FavouritePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
