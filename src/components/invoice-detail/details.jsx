import { Link } from "react-router-dom";
import { ADDRESS, EMAIL_HREF } from "../../lib/constants";

const MyInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium">Aditya Taank</h2>
      <p className="whitespace-break-spaces text-sm">{ADDRESS}</p>
      <Link to={EMAIL_HREF} className="text-blue-600 text-sm">
        adityataank@gmail.com
      </Link>
    </div>
  );
};

const AdditionalInfo = ({ info = "" }) => {
  return (
    <div>
      <h5 className="font-medium">Additional information</h5>
      <p className="text-gray-500">{info || "-"}</p>
    </div>
  );
};

function Details({ info = "" }) {
  return (
    <div className="grid grid-cols-2 mb-6 mx-4">
      <MyInfo />
      <AdditionalInfo info={info} />
    </div>
  );
}

export default Details;
