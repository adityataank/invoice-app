import { Link } from "react-router-dom";

const URL_MAP = {
  clients: "/clients/new",
  invoices: "/new",
};

function NoData({ type = "" }) {
  return (
    type && (
      <div className="mx-auto pt-52 text-center">
        <p className="text-lg mb-5">You haven't added any {type} yet.</p>
        <Link
          to={URL_MAP[type]}
          className="underline text-primary-color font-medium capitalize"
        >
          Create a new {type.slice(0, -1)}
        </Link>
      </div>
    )
  );
}

export default NoData;
