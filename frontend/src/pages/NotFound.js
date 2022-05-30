import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
      <h1 className="text-lg text-indigo-500">Not Found</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
}

