import { NavLink } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Fast React Pizza Company</NavLink>
      <SearchOrder />
      <p>Jonas</p>
    </header>
  );
}
