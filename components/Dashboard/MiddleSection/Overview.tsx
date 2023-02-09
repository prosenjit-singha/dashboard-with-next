type Props = React.ComponentProps<"div">;

function Overview(props: Props) {
  return (
    <div {...props}>
      <div className="flex gap-2 items-center">
        <h2 className="text-lg font-semibold text-[#1A1A1A]">Overview</h2>
        <div className="text-[#959595] flex gap-3 ml-auto">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0085FF]" />
            Income
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFBF1A]" />
            Expenses
          </p>
          <select className="px-2 py-1 border rounded-md focus-visible:outline-primary">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Overview;
