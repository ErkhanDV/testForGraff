import { Link } from "react-router-dom";

import "./BackLink.scss";

const BackLink = () => {
  return (
    <Link to="/" className="back-link">
      Back to products
    </Link>
  );
};

export default BackLink;
