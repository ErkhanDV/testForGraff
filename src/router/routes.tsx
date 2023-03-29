import { Home, Product, NotFound } from "../pages/_index";

import { ROUTE } from "./_constants";

import { IRoute } from "./_types";

const routes: IRoute[] = [
  {
    path: ROUTE.home,
    element: <Home />,
  },
  {
    path: ROUTE.product,
    element: <Product />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
