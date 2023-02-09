type Props = React.ComponentProps<"div">;

function Overview(props: Props) {
  return (
    <div {...props}>
      <h2 className="text-lg font-semibold text-[#1A1A1A]">Overview</h2>
    </div>
  );
}
export default Overview;
