import { Children } from "react";
import AddedLineItem from "./added-line-item";
import LineItemWrapper from "./line-item-wrapper";

import Delete from "../delete";

function LineItems({ items = [], setLineItems = () => {} }) {
  const handleDelete = (index) => {
    const tempItems = [...items];
    tempItems.splice(index, 1);
    setLineItems(tempItems);
  };
  return Children.toArray(
    items.map((item, index) => (
      <LineItemWrapper className="mb-4">
        <AddedLineItem data={item} index={index} />
        <span className="flex justify-center items-center">
          <Delete className="p-0" handleDelete={() => handleDelete(index)} />
        </span>
      </LineItemWrapper>
    ))
  );
}

export default LineItems;
