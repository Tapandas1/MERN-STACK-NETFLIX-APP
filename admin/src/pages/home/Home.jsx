import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import Chart from "../../Components/chart/Chart";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import axios from "axios";

const Home = () => {
  const MONTHS = useMemo(
    () => [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get("/users/stats");
        //console.log(response);
        const statsList=response.data.sort(function(a,b){
          return a._id - b._id;
        })
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  },[MONTHS]);
  //console.log(userStats)
  return (
    <>
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userStats}
          title="User Analytics"
          dataKey="New User"
          grid
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
};

export default Home;
