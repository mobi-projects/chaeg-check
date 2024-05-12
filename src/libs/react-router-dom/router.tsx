import {
  PATH_DETAIL,
  PATH_HOME,
  PATH_MY,
  PATH_NOT_FOUND,
  PATH_SIGN,
} from "@/constants"
import { Detail, Home, My, NotFound, Sign } from "@/pages"
import { HomeSuspenseFallback } from "@/pages/home/home.suspense"
import { Suspense } from "react"
import { Outlet, createBrowserRouter } from "react-router-dom"
import { AuthRoute } from "./auth-route"

export const Router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: PATH_SIGN,
        element: <Sign />,
      },
    ],
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: PATH_HOME,
        element: (
          <Suspense fallback={<HomeSuspenseFallback />}>
            <Home />,
          </Suspense>
        ),
      },
      {
        path: PATH_MY,
        element: <My />,
      },
      {
        path: PATH_DETAIL + "/:bookId",
        element: <Detail />,
      },
    ],
  },
  {
    path: PATH_NOT_FOUND,
    element: <NotFound />,
  },
])
