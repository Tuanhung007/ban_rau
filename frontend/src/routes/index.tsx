import LayoutWebsite from "@/pages/(auth)/layout";
import Signin from "@/pages/(auth)/signin";
import Signup from "@/pages/(auth)/signup";
import LayoutNhShop from "@/pages/(dashboard)/Layout";

import CategoryDetail from "@/pages/(dashboard)/user/home/_component/categoryDetail";

import LayoutHome from "@/pages/(dashboard)/user/home/layout";
import PageHome from "@/pages/(dashboard)/user/home/page";
import NotFound from "@/pages/(website)/404/page";
import ShopPage from "@/pages/(website)/Shop/shop";
import AboutPage from "@/pages/(website)/about/about";
import CartPage from "@/pages/(website)/cart/page";
import ContectPage from "@/pages/(website)/contect/contect";
import { Route, Routes } from "react-router-dom";

import ThankyouPage from "@/pages/(dashboard)/user/home/_component/thankyou";
import OrderPage from "@/pages/(website)/order/order";
import ForgotPassword from "@/pages/(auth)/forgotPassword";
import Users from "@/pages/(dashboard)/admin/users/Users";
import UserForm from "@/pages/(dashboard)/admin/users/UserForm";

import DashboardPage from "@/pages/(dashboard)/admin/dashboard/page";
import ProductsAdd from "@/pages/(dashboard)/admin/products/_component/add";
import ProductsEdit from "@/pages/(dashboard)/admin/products/_component/edit";
import ProductsList from "@/pages/(dashboard)/admin/products/page";
import CategoryList from "@/pages/(dashboard)/admin/categories/page";
import CategoryAdd from "@/pages/(dashboard)/admin/categories/_component.tsx/add";
import CategoryEdit from "@/pages/(dashboard)/admin/categories/_component.tsx/edit";
import LayoutAdmin from "@/pages/(dashboard)/admin/Layoutadmin";
import DetailPage from "@/pages/(website)/detail/detail";
import SearchComponent from "@/components/Search";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutNhShop />}>
          <Route path="/" element={<LayoutWebsite />}>
            <Route path="/" element={<LayoutHome />}>
              <Route index element={<PageHome />}></Route>
              <Route path="shop" element={<ShopPage />}></Route>
              <Route path="search" element={<SearchComponent />}></Route>
              <Route path="detail/:id" element={<DetailPage />}></Route>
              <Route path="category" element={<CategoryDetail />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="contact" element={<ContectPage />}></Route>
              <Route path="cart" element={<CartPage />}></Route>{" "}
              <Route path="signin" element={<Signin />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="order" element={<OrderPage />}></Route>
              <Route path="thankyou" element={<ThankyouPage />}></Route>{" "}
            </Route>
          </Route>
          <Route
            path="admin"
            element={
              // <PrivateRoute>
              <LayoutAdmin />
              // </PrivateRoute>
            }
          >
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/usersEdit/:id" element={<UserForm />} />
            <Route index element={<DashboardPage />}></Route>
            <Route path="products" element={<ProductsList />}></Route>

            <Route path="products/add" element={<ProductsAdd />}></Route>

            <Route path="products/edit/:id" element={<ProductsEdit />}></Route>
            <Route path="category" element={<CategoryList />}></Route>
            <Route path="category/add" element={<CategoryAdd />}></Route>
            <Route path="category/edit/:id" element={<CategoryEdit />}></Route>
            {/* </Route> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Router;
