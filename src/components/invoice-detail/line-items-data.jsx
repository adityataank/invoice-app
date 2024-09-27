import { Children } from "react";
import { cn } from "../../lib/utils";

const Cell = ({ name = "", value = "" }) => {
  const isLeftAligned = name === "services";
  return (
    <td className={cn("text-right text-sm truncate max-w-9", isLeftAligned && "text-left")}>
      {value}
    </td>
  );
};

function LineItemsData({ data = [] }) {
  return (
    <tbody>
      {Children.toArray(
        data.map((item) => (
          <tr>
            {Children.toArray(
              Object.entries(item).map(([name, value]) => (
                <Cell name={name} value={value} />
              ))
            )}
          </tr>
        ))
      )}
    </tbody>
  );
}

export default LineItemsData;
