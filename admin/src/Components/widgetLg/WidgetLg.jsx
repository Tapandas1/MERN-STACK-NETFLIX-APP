import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
    const Button=({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>

    }
  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
          <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tapan Das</span>
            </td>
            <td className="widgetLgDate">2 Jun 2023</td>
            <td className="widgetLgAmount">$224</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tapan Das</span>
            </td>
            <td className="widgetLgDate">2 Jun 2023</td>
            <td className="widgetLgAmount">$224</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tapan Das</span>
            </td>
            <td className="widgetLgDate">2 Jun 2023</td>
            <td className="widgetLgAmount">$224</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WidgetLg;
