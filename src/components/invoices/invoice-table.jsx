import TableBody from "./table-body";
import TableHeadings from "./table-headings";

function InvoiceTable() {
  return (
    <div className="bg-white h-full max-h-[calc(100dvh-146px)] overflow-y-auto py-4 px-7 pt-0 rounded-xl shadow-md">
      <table className="w-full">
        <TableHeadings />
        <TableBody />
      </table>
    </div>
  );
}

export default InvoiceTable;
