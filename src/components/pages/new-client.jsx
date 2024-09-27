import { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../input";
import Button from "../button";

import ClientActions from "../../flux/actions/client-actions";
import { checkClientData } from "../../lib/utils";

const FIELDS = [
  {
    name: "name",
    label: "Client name",
    type: "text",
    required: true,
    autoFocus: true,
  },
  {
    name: "email",
    label: "Client email",
    type: "text",
    required: true,
  },
  {
    name: "contactInfo",
    label: "Address / Contact info",
    type: "textarea",
    required: true,
  },
];

function NewClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactInfo: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e) {
      const name = e?.target?.name;
      const value = e?.target?.value;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCancel = () => navigate(-1);

  const handleSave = () => {
    ClientActions.addClient(formData);
    navigate(-1);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md h-full">
      <form className="max-w-xl space-y-9" onSubmit={(e) => e.preventDefault()}>
        {Children.toArray(
          FIELDS.map((field) => (
            <Input
              value={formData[field.name]}
              onChange={handleChange}
              {...field}
            />
          ))
        )}
        <div className="flex items-start justify-end gap-5">
          <Button variant="destructive" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSave}
            disabled={!checkClientData(formData)}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewClient;
