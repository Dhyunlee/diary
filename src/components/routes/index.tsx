import React, { useLayoutEffect, useState } from "react";
import ProtectedRoutes from "./privateRoutes";
import PublicRouter from "./publicRoutes";
import Header from "../common/header";

function Routes() {
  const [RoutesComponent, setRoutesComponent] = useState<React.ReactElement | null>(null);
  //   const authToken = token.getToken("token");
  const authToken = false;

  useLayoutEffect(() => {
    // const authToken = token.getToken("token");
    console.log(authToken);
    authToken && setRoutesComponent(<ProtectedRoutes />);
    !authToken && setRoutesComponent(<PublicRouter />);
  }, [authToken]);

  return (
    <div>
      <Header />
      <main>{RoutesComponent}</main>
    </div>
  );
}

export default Routes;
