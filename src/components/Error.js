import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>OOP'S !!!</h1>
      <h3>
        {error.statusText} {error.status}
      </h3>
    </div>
  );
};

export default Error;
