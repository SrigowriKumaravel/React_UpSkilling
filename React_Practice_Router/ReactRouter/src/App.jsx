import React from "react";
import HomePage from "./pages/HomePage";
import ElectronicsPage from "./pages/ElectronicsPage";
import BooksPage from "./pages/BooksPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ElectronicsDetailsPage from "./pages/ElectronicsDetailsPage";
import BooksDetailsPage from "./pages/BooksDetailsPage";
import PageLayout from "./pages/PageLayout";
import NotFoundPage from "./pages/NotFoundPage";

const route = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFoundPage /> },
  {
    path: "/electronics",
    element: (
      <PageLayout>
        <ElectronicsPage />
      </PageLayout>
    ),
    children: [
      {
        path: ":id",
        element: <ElectronicsDetailsPage />,
      },
    ],
  },
  {
    path: "/books",
    element: (
      <PageLayout>
        <BooksPage />
      </PageLayout>
    ),
    children: [
      {
        path: ":id",
        element: <BooksDetailsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
