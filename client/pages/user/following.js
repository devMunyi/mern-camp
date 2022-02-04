import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";
import { toast } from "react-toastify";

const Following = () => {
  //states
  const [state, setState] = useContext(UserContext);
  const [people, setPeople] = useState([]);

  //router
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };

  //handle image retrival
  /*
  const imageSource = (person) => {
    if (person.image) {
      return person.image.url;
    } else {
      return person.name[0];
    }
  };
*/

  const handleUnfollow = async (person) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: person._id });
      //update local storage, update user, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));

      //update context
      setState({ ...state, user: data });

      //Update people state to re-render immediately without having to wait for page refresh
      let filtered_arr = people.filter((p) => p._id !== person._id);
      setPeople(filtered_arr);

      toast.warning(`Unfollowed ${person.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row col-md-6 offset-md-3">
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(person) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                person.image ? (
                  <Avatar size={40} src={person.image.url} />
                ) : (
                  <Avatar size={40}>{person.name[0]}</Avatar>
                )
              }
              title={
                <div className="d-flex justify-content-between">
                  {person.username}{" "}
                  <span
                    onClick={() => handleUnfollow(person)}
                    className="text-primary pointer"
                  >
                    Unfollow
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />

      <Link href={`/user/dashboard`}>
        <a title="go back" className="d-flex justify-content-center pt-5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default Following;
