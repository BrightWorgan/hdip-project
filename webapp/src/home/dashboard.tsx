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
  stats.projectStats; // [{ contract: '', count: 44 }, ...]
  const projectData = {
    labels: projectLabels,
    datasets: [
      {
        label: "# of contracts by type",
        data: projectCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
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
