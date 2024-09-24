import { cn } from "../lib/utils";

const STYLE_MAP = {
  paid: "bg-[#F5FCD2] text-[#659711]",
  unpaid: "bg-[#FFF8D7] text-[#DBA32A]",
  due: "bg-[#FFE7D3] text-[#FF4423]",
};

function StatusTag({ status = "" }) {
  const cls = STYLE_MAP[status.toLowerCase()];
  return (
    <div
      className={cn(
        "bg-red-300 px-3 py-2 grid place-items-center w-28 rounded-lg font-medium text-sm",
        cls
      )}
    >
      {status}
    </div>
  );
}

export default StatusTag;
