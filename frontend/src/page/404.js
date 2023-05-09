import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-7 h-screen w-screen text-white">
      <div className="flex items-center justify-center gap-2 flex-col">
        <span className="text-3xl">404</span>
        <span>page not found . . . </span>
      </div>
      <Link to={"/"}>go to home page</Link>
    </div>
  );
};
export default NotFoundPage;
