import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import moment from "moment";

const People = ({ people, handleFollow }) => {
  //states
  const [state] = useState();

  //router
  const router = useRouter();

  //handle image retrival
  const imageSource = (person) => {
    if (person.image) {
      return person.image.url;
    } else {
      return person.name[0];
    }
  };

  return (
    <>
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
                    onClick={() => handleFollow(person)}
                    className="text-primary pointer"
                  >
                    Follow
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default People;
