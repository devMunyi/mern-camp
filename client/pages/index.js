import { useContext } from "react";
import { UserContext } from "../context/index";

const Home = () => {
  const [state, setState] = useContext(UserContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="py-2 text-center">Home Page</h1>

          <img
            src="/images/default.jpg"
            alt="Pedestrian Crossing"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
