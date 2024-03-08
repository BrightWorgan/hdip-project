import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import util from "../util";

const Dashboard = () => {
  const [stats, setStats] = useState({
    projectStats: [] as any[],
    userStats: [] as any[],
    findStats: [] as any[],
  });
  useEffect(() => {
    util.get("/stats").then((res) => {
      // setStats(res?.data || []);
    });
  }, []);
  const projectLabels = stats.projectStats.map((stat) => stat.contract);
  const projectCounts = stats.projectStats.map((stat) => stat.count);
  const userLabels = stats.userStats.map((stat) => stat.position);
  const userCounts = stats.userStats.map((stat) => stat.count);
  const findsLabels = stats.findStats.map((stat) => stat.material);
  const findsCounts = stats.findStats.map((stat) => stat.count);
  stats.projectStats;

  const projectData = {
    labels: projectLabels,
    datasets: [
      {
        label: "# of contracts by type",
        data: projectCounts,
        backgroundColor: [
          "rgba(113, 125, 82, 1)",
          "rgba(115, 162, 209, 1)",
          "rgba(214, 210, 185, 1)",
          "rgba(95, 82, 125, 1)",
          "rgba(91, 125, 82, 1)",
          "rgba(209, 115, 162, 1)",
          "rgba(82, 125, 116, 1)",
        ],
        borderColor: [
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const userData = {
    labels: userLabels,
    datasets: [
      {
        label: "# of users by position",
        data: userCounts,
        backgroundColor: [
          "rgba(113, 125, 82, 1)",
          "rgba(115, 162, 209, 1)",
          "rgba(214, 210, 185, 1)",
          "rgba(95, 82, 125, 1)",
          "rgba(91, 125, 82, 1)",
          "rgba(209, 115, 162, 1)",
          "rgba(82, 125, 116, 1)",
        ],
        borderColor: [
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const findsData = {
    labels: findsLabels,
    datasets: [
      {
        label: "# of finds by material",
        data: findsCounts,
        backgroundColor: [
          "rgba(113, 125, 82, 1)",
          "rgba(115, 162, 209, 1)",
          "rgba(214, 210, 185, 1)",
          "rgba(95, 82, 125, 1)",
          "rgba(91, 125, 82, 1)",
          "rgba(209, 115, 162, 1)",
          "rgba(82, 125, 116, 1)",
        ],
        borderColor: [
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
          "rgb(35, 35, 43, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ flex: 1, paddingBottom: "60px" }}>
        {" "}
        <Doughnut data={projectData} />
      </div>
      <div style={{ flex: 1, paddingBottom: "60px" }}>
        {" "}
        <Doughnut data={userData} />
      </div>
      <div style={{ flex: 1 }}>
        {" "}
        <Doughnut data={findsData} />
      </div>
    </div>
  );
};

export default Dashboard;
