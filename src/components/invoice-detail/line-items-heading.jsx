import { Children } from "react";
import { cn } from "../../lib/utils";

const HEADINGS = [
  "Services",
  "Hours of work",
  "Expenses",
  "Materials",
  "Labor",
  "Sub total",
];

const CUSTOM_WIDTH = {
  Services: "90px",
  "Hours of work": "90px",
};

const leftAlignedHeadings = ["Services"];

const Heading = ({ heading }) => {
  const isLeftAligned = leftAlignedHeadings.includes(heading);
  return (
    <th
      className={cn(
        "text-right font-medium text-gray-500 text-sm truncate",
        isLeftAligned && "text-left"
      )}
      style={{ width: CUSTOM_WIDTH[heading] ?? "auto" }}
    >
      {heading}
    </th>
  );
};

function LineItemsHeading() {
  return (
    <thead className="w-full h-11">
      <tr className="h-fit">
        {Children.toArray(
          HEADINGS.map((heading) => <Heading heading={heading} />)
        )}
      </tr>
    </thead>
  );
}

export default LineItemsHeading;
