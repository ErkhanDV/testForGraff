import { useParams } from "react-router-dom";

const NotFound = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="not-found">
      <h1>NON</h1>
    </div>
  );
};

export default NotFound;
