import OverviewHeader from "./Header";
import BigChart from "./BigChart";
import dynamic from "next/dynamic";

type Props = React.ComponentProps<"div">;

const Chart = dynamic(() => import("./BigChart"), { ssr: false });

function Overview(props: Props) {
  return (
    <div {...props}>
      {/* Header */}
      <OverviewHeader />
      <Chart />
    </div>
  );
}
export default Overview;
