import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <Button
          type="primary"
          className="!mt-4 transition rounded-md shadow-md"
        >
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default memo(NotFound);
