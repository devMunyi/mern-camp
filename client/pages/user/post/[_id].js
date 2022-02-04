import { useEffect, useState } from "react";
import UserRoute from "../../../components/routes/UserRoute";
import PostForm from "../../../components/Forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const EditPost = () => {
  const [post, setPost] = useState({});

  //state
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  //console.log("router => ", router);
  const { _id } = router.query;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
      setContent(data.content);
      setImage(data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    //console.log("Submit post to update", content, image);

    try {
      setLoading(true);
      const { data } = await axios.put(`/update-post/${_id}`, {
        content,
        image,
      });
      //console.log("UPDATE POST RESPONSE INFO => ", data);
      //handling reponses
      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        setContent("");
        setContent("");
        setImage({});
        setLoading(false);
        toast.success("Post updated successfully");
        router.push("/user/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-3 bg-default-image text-light">
          <div className="col text-center">
            <h1>Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              loading={loading}
              image={image}
              uploading={uploading}
            />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default EditPost;
