import "./phone.css";
import { FaSquare } from "react-icons/fa";
import { BsCircleFill, BsTriangleFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_part">
        <FaSquare />
        <BsCircleFill />
        <BsTriangleFill className="triangle_icon" />
      </div>
    </div>
  );
}

export default Footer;
