import CardContainer from "./ResCard";
import FoodInterest from "./FoodInt";
import { resList, favDisc } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListofRes, setListofRes] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = ListofRes.filter((res) => res.info.avgRating > 4.2);
          setListofRes(filterList);
        }}
      >
        Popular Resturant
      </button>
      <button className="price" onClick={() => {
         const filterList = ListofRes.filter((res) => res.info.costForTwo < "₹300 for two" );
         setListofRes(filterList);
      }}> Below ₹300
      </button>
      <div className="food-int">
        {favDisc.map((food) => (
          <FoodInterest key={food.id} favData={food} />
        ))}
      </div>
      {/* <FoodInterest favData={favDisc}/> */}
      <div className="card-container">
        {ListofRes.map((resturant) => (
          <CardContainer key={resturant.info.id} resData={resturant} />
        ))}
        {/* <CardContainer resData = {resList[0]}/>
        <CardContainer resData = {resList[1]}/>
        <CardContainer resData = {resList[2]}/>
        <CardContainer resData = {resList[3]}/>
        <CardContainer resData = {resList[4]}/> */}

        {/* <CardContainer resname="Biriyani King" rating = "3.4" address = "Near Patia"/> */}
      </div>
    </div>
  );
};

export default Body;
