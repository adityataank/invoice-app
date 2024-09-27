import { formatAmount } from "../../lib/utils";

function TotalAmount({ total }) {
  return (
    <div className="h-10 w-fit ml-auto rounded-2xl flex items-center justify-end px-8 bg-[#F2F5F9] mt-8">
      <p className="flex items-center gap-8 text-lg text-neutral-700">
        Total <strong className="text-black">{formatAmount(total) ?? 0}</strong>
      </p>
    </div>
  );
}

export default TotalAmount;
