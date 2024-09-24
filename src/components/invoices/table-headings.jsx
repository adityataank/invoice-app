import { Children } from "react";
import { cn } from "../../lib/utils";

const headings = ["", "Name", "Date", "Client", "Price", "Status", ""];
const rightAlignedHeadings = ["Price"];

const Heading = ({ heading }) => {
  const isRightAligned = rightAlignedHeadings.includes(heading);
  return (
    <th
      className={cn(
        "text-left text-gray-500",
        isRightAligned && "text-right pr-20"
      )}
    >
      {heading}
    </th>
  );
};

function TableHeadings() {
  return (
    <thead className="bg-white sticky top-0 w-full">
      <tr className="h-16">
        {Children.toArray(
          headings.map((heading) => <Heading heading={heading} />)
        )}
      </tr>
    </thead>
  );
}

export default TableHeadings;
