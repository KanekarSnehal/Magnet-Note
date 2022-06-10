import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useDocumentTitle = () => {
  const { pathname } = useLocation();
  const validRoutes = [
    "home",
    "archive",
    "trash",
    "profile",
    "login",
    "signup",
  ];

  const titleName = pathname.split("/")[1];

  useEffect(() => {
    let pathName = "";
    if (titleName === "") {
      pathName = `MAGNET NOTE`;
    } else if (validRoutes.includes(titleName))
      pathName = `${titleName.toUpperCase()} | MAGNET NOTE`;
    else pathName = `NOT FOUND`;

    document.title = pathName;
  }, [pathname]);
};
