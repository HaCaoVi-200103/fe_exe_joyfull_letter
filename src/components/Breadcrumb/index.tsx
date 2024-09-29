import { Breadcrumb } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import style from "./style.module.css";

const BreadcrumbCustomize = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <NavLink className={style.link} to={"/"}>
        Home
      </NavLink>
      {pathname &&
        pathname.map((item, index) => {
          const to = `/${pathname.slice(0, index + 1).join("/")}`;
          const capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1);
          return (
            <div className="d-flex align-items-center" key={to}>
              <IoIosArrowForward className={style.iconBreadCrumb} />
              <NavLink
                className={`${
                  index === pathname.length - 1 ? style.currentLink : style.link
                }`}
                to={to}
              >
                {capitalizedItem}
              </NavLink>
            </div>
          );
        })}
    </Breadcrumb>
  );
};

export default BreadcrumbCustomize;
