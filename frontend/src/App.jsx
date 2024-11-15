import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Root, NotFound, Home } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path:"/contact-us",
      //   element: <ContactUs />,
      // },
      // {
      //   path:"/admin",
      //   element: <AdminPage />,
      // }
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
