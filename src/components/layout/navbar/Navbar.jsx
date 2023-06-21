import { AddShoppingCart } from "@mui/icons-material";
import "./Navbar.css";
import { Badge } from "@mui/material";


export const Navbar = () => {
  return (
    <div>
      <ul className="container">
        <li>Home</li>
        <li>Catalogo</li>
        <li>about</li>
        <li>contacto</li>
        <li>
          <Badge badgeContent={1} color="success">
            <AddShoppingCart color="action" />
          </Badge>
        </li>
        <cart />
      </ul>
    </div>
  );
};
