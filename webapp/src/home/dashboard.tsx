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
      setStats(res?.data);
    });
  }, []);
  const projectLabels = stats.projectStats.map((stat) => stat.contract);
  const projectCounts = stats.projectStats.map((stat) => stat.count);
  const userLabels = stats.userStats.map((stat) => stat.position);
  const userCounts = stats.userStats.map((stat) => stat.count);
  const findsLabels = stats.findStats.map((stat) => stat.material);
  const findsCounts = stats.findStats.map((stat) => stat.count);
  stats.projectStats;

  /* green #717d52 rgb(113, 125, 82)
blue #73a2d1 rgb(115, 162, 209)
black ish #23232b  rgb(35, 35, 43)
// sable ish #d6d2b9 rgb(214, 210, 185) */

  const projectData = {
    labels: projectLabels,
    datasets: [
      {
        label: "# of contracts by type",
        data: projectCounts,
        backgroundColor: [
          "rgb(113, 125, 82, 1)",
          "rgb(115, 162, 209, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgb(35, 35, 43, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
      },
    ],
  };

  const findsData = {
    labels: findsLabels,
    datasets: [
      {
        label: "# of finds by material",
        data: findsCounts,
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
