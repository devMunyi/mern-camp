import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/index";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../../components/Forms/authForm";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  //image upload
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (state && state.user) {
      //console.log("User from state =>", state.user);
      setUsername(state.user.username);
      setAbout(state.user.about);
      setEmail(state.user.email);
      setName(state.user.name);
      setImage(state.user.image);
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.put(`/profile-update`, {
        username,
        about,
        name,
        email,
        password,
        cpassword,
        secret,
        image,
      });

      console.log("Update response =>", data);
      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        //Update local storage, update user, keep token
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;

        //resave auth with updated user
        localStorage.setItem("auth", JSON.stringify(auth));

        //update context
        setState({ ...state, user: data });

        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
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
    <div className="container-fluid">
      <div className="row py-3 bg-default-image text-light">
        <div className="col text-center">
          <h1>Profile</h1>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-md-6 offset-md-3">
          {/*profile image upload*/}
          <label className="d-flex justify-content-center h5">
            {image && image.url ? (
              <Avatar size={30} src={image.url} className="mt-1" />
            ) : uploading ? (
              <LoadingOutlined className="mt-2" />
            ) : (
              <CameraOutlined className="mt-2" />
            )}
            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>

          <AuthForm
            profileUpdate={true}
            username={username}
            setUsername={setUsername}
            about={about}
            setAbout={setAbout}
            handleSubmit={handleSubmit}
            loading={loading}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            cpassword={cpassword}
            setCpassword={setCpassword}
            secret={secret}
            setSecret={setSecret}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Your have successfully updated your profile.</p>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            Already registered? &nbsp;
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
