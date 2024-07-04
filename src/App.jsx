import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, {loader as menuLoader} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder";
import Order, {loader as orederLoader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderid",
        element: <Order />,
        loader: orederLoader,
        errorElement: <Error/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
