/*
 * @Author: yeyu98
 * @Date: 2024-05-23 20:31:38
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-27 17:19:08
 * @Description: 
 */
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Outlet, 
  Link, 
  useParams
} from "react-router-dom";
import "../index.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: "/courses/:id", element: <Course /> },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
  {
    path: "/loaderData",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      let data = useLoaderData() as { message: string };
      return <h1>{data.message}</h1>;
    },
  },
]);

export default function Demo1() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
  );
}

function CoursesIndex() {
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          <li>
            <Link to="react-fundamentals">React Fundamentals</Link>
          </li>
          <li>
            <Link to="advanced-react">Advanced React</Link>
          </li>
          <li>
            <Link to="react-router">React Router</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Course() {
  let { id } = useParams<"id">();

  return (
    <div>
      <h2>
        Welcome to the {id!.split("-").map(capitalizeString).join(" ")} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

