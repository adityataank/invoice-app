import { Children, useEffect, useState } from "react";
import LineItemWrapper from "./line-item-wrapper";
import LineItemInput from "./line-item-input";
import TickIcon from "../icons/tick";

const FIELDS = [
  {
    name: "services",
    type: "text",
  },
  {
    name: "hours_of_work",
    type: "number",
  },
  {
    name: "expenses",
    type: "number",
  },
  {
    name: "materials",
    type: "number",
  },
  {
    name: "labor",
    type: "number",
  },
];

const DEFAULT_STATE = {
  services: "",
  hours_of_work: 0,
  expenses: 0,
  materials: 0,
  labor: 0,
};

function NewLineItem({ handleSave = () => {} }) {
  const [lineItemData, setLineItemData] = useState(DEFAULT_STATE);
  const [subTotal, setSubTotal] = useState(0);

  const handleChange = ({ name, value }) => {
    setLineItemData({ ...lineItemData, [name]: value });
  };

  const onSave = () => {
    handleSave({
      ...lineItemData,
      sub_total: subTotal,
      services: lineItemData.services || "New service",
    });
    setLineItemData(DEFAULT_STATE);
  };

  useEffect(() => {
    const ignoreKeys = ["services", "sub_total"];
    const valueArray = Object.entries(lineItemData)
      .map(([k, v]) => {
        if (!ignoreKeys.includes(k)) {
          return v;
        }
      })
      .filter((i) => typeof i !== "undefined");
    const sum = valueArray.reduce((accumulator, currentValue, index) => {
      if (index === 0) {
        return accumulator + Number(currentValue) * 10; // $10 per hour
      }
      return accumulator + Number(currentValue);
    }, 0);
    setSubTotal(sum.toFixed(2));
  }, [lineItemData]);

  const SaveButton = () => (
    <button onClick={onSave} className="flex justify-center items-center">
      <TickIcon />
    </button>
  );

  return (
    <LineItemWrapper>
      {Children.toArray(
        FIELDS.map((field, index) => (
          <LineItemInput
            index={index}
            value={lineItemData[field.name]}
            handleChange={handleChange}
            {...field}
          />
        ))
      )}
      <LineItemInput readOnly value={subTotal} />
      <SaveButton />
    </LineItemWrapper>
  );
}

export default NewLineItem;
