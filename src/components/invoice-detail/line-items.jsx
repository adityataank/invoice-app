import LineItemsData from "./line-items-data";
import LineItemsHeading from "./line-items-heading";

function LineItems({ lineItems = [] }) {
  return (
    <div className="w-full px-5">
      <table className="w-full border-spacing-3 border-separate">
        <LineItemsHeading />
        <LineItemsData data={lineItems} />
      </table>
    </div>
  );
}

export default LineItems;
