import React, { Fragment } from "react";
import SKILLS from "../data/skills";
import BubbleChart from "@weknow/react-bubble-chart-d3";

const Chart = () => {
  return (
    <Fragment>
      <BubbleChart
        graph={{
          zoom: 0.9,
          offsetX: -0.05,
          offsetY: -0.01
        }}
        width={700}
        height={700}
        padding={5} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        valueFont={{
          family: "Arial",
          size: 0,
          color: "#fff",
          weight: "bold"
        }}
        labelFont={{
          family: "Arial",
          size: 12,
          color: "#fff",
          weight: "bold"
        }}
        //Custom bubble/legend click functions such as searching using the label, redirecting to other page
        // bubbleClickFunc={this.bubbleClick}
        // legendClickFun={this.legendClick}
        data={SKILLS}
      />
    </Fragment>
  );
};

// class Chart extends Component {
//   render() {
//     return (
//       <Fragment>
//         <BubbleChart
//           graph={{
//             zoom: 1.1,
//             offsetX: -0.05,
//             offsetY: -0.01
//           }}
//           width={1000}
//           height={800}
//           padding={0} // optional value, number that set the padding between bubbles
//           // showLegend={true} // optional value, pass false to disable the legend.
//           // legendPercentage={20} // number that represent the % of with that legend going to use.
//           // legendFont={{
//           //   family: "Arial",
//           //   size: 12,
//           //   color: "#000",
//           //   weight: "bold"
//           // }}
//           valueFont={{
//             family: "Arial",
//             size: 12,
//             color: "#fff",
//             weight: "bold"
//           }}
//           labelFont={{
//             family: "Arial",
//             size: 16,
//             color: "#fff",
//             weight: "bold"
//           }}
//           //Custom bubble/legend click functions such as searching using the label, redirecting to other page
//           // bubbleClickFunc={this.bubbleClick}
//           // legendClickFun={this.legendClick}
//           data={SKILLS}
//         />
//       </Fragment>
//     );
//   }
// }

export default Chart;
