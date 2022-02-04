import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/index";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) {
      getCurrentUser();
    }
  }, [state && state.token]);

  const getCurrentUser = async () => {
    //const mytoken = await `Bearer ${state.token}`;
    //console.log(mytoken);
    try {
      const { data } = await axios.get(`/current-user`);
      if (data.ok) setOk(true);
    } catch (err) {
      router.push("/login");
    }
  };

  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  return !ok ? (
    <div className="container">
      <div className="row">
        <div className="col">
          <SyncOutlined
            spin
            className="py-5 d-flex justify-content-center display-4 text-primary"
          />
        </div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default UserRoute;
