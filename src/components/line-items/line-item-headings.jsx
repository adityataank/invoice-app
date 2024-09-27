import { Children } from "react";
import LineItemWrapper from "./line-item-wrapper";

const HEADINGS = [
  "Services",
  "Hours of work",
  "Expenses",
  "Materials",
  "Labor",
  "Sub total",
];

function LineItemsHeading() {
  return (
    <LineItemWrapper className="mb-4">
      {Children.toArray(
        HEADINGS.map((heading) => <h5 className="font-medium">{heading}</h5>)
      )}
    </LineItemWrapper>
  );
}

export default LineItemsHeading;
