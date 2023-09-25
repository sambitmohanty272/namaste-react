import { FOOD_URL } from "../../utils/Constant";

const FoodInterest = ({favData}) => {
  const {imageId} = favData;
  return (
    <div className="image">
      <a href={favData.action.link}>
        <img src={FOOD_URL + imageId} width={144} height={180}></img>
      </a>
      {/* <h2>{favData.action.link}</h2> */}
    </div>
  );
};

export default FoodInterest;
