import { FC } from "react";
import { Link, useRouteError } from "react-router-dom";
import { Page } from "../components/page/Page";
import { homeUrl } from "./bestSellers/routeHelpers";

const NotFound: FC = () => {
  const error = useRouteError() as any;
  console.error(error);
  const errorMessage = (error.statusText || error.message) ?? 'Unkonwn error'

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <Link to={homeUrl}>Home</Link>
    </div>
  )
}

export default NotFound