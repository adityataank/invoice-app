import ClientActions from "../../flux/actions/client-actions";
import Delete from "../delete";

function ClientCard({ name = "", contactInfo = "", index }) {
  const handleDelete = () => {
    ClientActions.deleteClient(index);
  };
  return (
    <div className="bg-white rounded-lg shadow-xl border border-neutral-300 p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <h6 className="truncate text-lg font-medium">{name}</h6>
        <Delete className="self-end" handleDelete={handleDelete} />
      </div>
      <p className="whitespace-break-spaces">{contactInfo}</p>
    </div>
  );
}

export default ClientCard;
