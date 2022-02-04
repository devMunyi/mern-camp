import { useState, useContext } from "react";
import { UserContext } from "../context/index";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import ForgotPasswordForm from "../components/Forms/ForgotPasswordForm";

const ForgotPassword = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const [email, setEmail] = useState("samunyi90@gmail.com");
  const [newPassword, setNewPassword] = useState("123456");
  const [cnewPassword, setCnewPassword] = useState("123456");
  const [secret, setSecret] = useState("red");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/forgot-password`, {
        email,
        newPassword,
        cnewPassword,
        secret,
      });

      console.log(data);
      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        setSuccessMessage(data.success);
        setLoading(false);
        setEmail("");
        setNewPassword("");
        setCnewPassword("");
        setSecret("");
        setOk(true);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  if (state && state.token) router.push("/");

  return (
    <div className="container-fluid">
      <div className="row py-3 bg-default-image text-light">
        <div className="col text-center">
          <h1>Forgot Password</h1>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-md-6 offset-md-3">
          <ForgotPasswordForm
            handleSubmit={handleSubmit}
            loading={loading}
            email={email}
            setEmail={setEmail}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            cnewPassword={cnewPassword}
            setCnewPassword={setCnewPassword}
            secret={secret}
            setSecret={setSecret}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Success"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>{successMessage}</p>
            <Link href="/login">
              <a className="btn btn-primary btn-sm">Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
