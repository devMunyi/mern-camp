import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/Forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/Cards/PostList";
import People from "../../components/Cards/People";
import Link from "next/link";

const Home = () => {
  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  //posts
  const [posts, setPosts] = useState([]);

  //people
  const [people, setPeople] = useState([]);

  //route
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
      findPeople();
    }
  }, [state && state.token]);

  //fetch user posts
  const newsFeed = async () => {
    try {
      const { data } = await axios.get("/news-feed");
      //console.log("User posts => ", data);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  //Handle submit for creating a post
  const postSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/create-post", { content, image });
      //console.log("create post response => ", data);

      //handling reponses
      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        newsFeed();
        setContent("");
        setContent("");
        setImage({});
        setLoading(false);
        toast.success("Post created");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Handle image
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();

    formData.append("image", file);
    console.log([...formData]);

    try {
      setUploading(true);
      const { data } = await axios.post("/upload-image", formData);
      if (data.error) {
        setUploading(false);
        toast.error(data.error);
      } else {
        setImage({
          url: data.url,
          public_id: data.public_id,
        });
        setUploading(false);
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  //Find people
  const findPeople = async () => {
    try {
      const { data } = await axios.get("/find-people");
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    try {
      setLoading(true);
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      //go ahead and delete here
      const { data } = await axios.delete(`/delete-post/${post._id}`);
      setLoading(false);
      newsFeed(); //reload the posts
      toast.success("Posted deleted");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  //handle follows
  const handleFollow = async (user) => {
    //console.log("Add this user to the following list", user);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      //console.log("User follow response", data);
      //update local storage, update user, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));

      //update context
      setState({ ...state, user: data });

      //Update people state to re-render immedietely without having to wait for page refresh
      let filtered_arr = people.filter((p) => p._id !== user._id);
      setPeople(filtered_arr);

      //re-render post in the newsfeed
      newsFeed();

      toast.success(`Following ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  //like and unlike
  const handleLike = async (_id) => {
    //console.log("Like post id", _id);
    try {
      const { data } = await axios.put("/like-post", { _id });
      //console.log("Liked =>", data);
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async (_id) => {
    //console.log("Unlike post id", _id);
    try {
      const { data } = await axios.put("/unlike-post", { _id });
      //console.log("Unliked =>", data);
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-3 bg-default-image text-light">
          <div className="col text-center">
            <h1>Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              loading={loading}
              image={image}
              uploading={uploading}
            />
            <br />
            <PostList
              posts={posts}
              loading={loading}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
              handleDelete={handleDelete}
            />
          </div>

          <div className="col-md-4">
            {state && state.user && state.user.following && (
              <Link href={`/user/following`}>
                <a className="h6">{state.user.following.length} Following</a>
              </Link>
            )}
            <People people={people} handleFollow={handleFollow} />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Home;
