import { CDN_URL } from "../../utils/Constant";

const CardContainer = ({ resData }) => {
    const { name, avgRating, areaName, costForTwo, cuisines } = resData?.info;
    return (
      <div className="cards">
        <img
          className="logo-card"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        ></img>
        <h2>{name}</h2>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <p>{areaName}</p>
        <p>{cuisines.join(",")}</p>
      </div>
    );
  };

  export default CardContainer;