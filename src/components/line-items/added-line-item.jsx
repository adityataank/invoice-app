import { Children } from "react";

const Text = ({ item, index }) => {
  const [name, val] = item;
  return <p className="px-4">{val}</p>;
};

function AddedLineItem({ data = {}, index }) {
  return Children.toArray(
    Object.entries(data).map((item) => {
      return <Text item={item} index={index} />;
    })
  );
}

export default AddedLineItem;
