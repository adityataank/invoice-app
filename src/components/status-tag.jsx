import moment from "moment";
import { cn } from "../lib/utils";

const STYLE_MAP = {
  paid: "bg-[#F5FCD2] text-[#659711]",
  unpaid: "bg-[#FFF8D7] text-[#DBA32A]",
  late: "bg-[#FFE7D3] text-[#FF4423]",
};

function StatusTag({ status = "", due_date = "" }) {
  const tag = moment(due_date).isBefore(moment()) ? "Late" : status;
  const cls = STYLE_MAP[tag.toLowerCase()];
  return (
    <div
      className={cn(
        "bg-red-300 px-3 py-2 grid place-items-center w-28 rounded-lg font-medium text-sm",
        cls
      )}
    >
      {tag}
    </div>
  );
}

export default StatusTag;
