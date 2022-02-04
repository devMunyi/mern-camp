import { useState, useContext } from "react";
import { UserContext } from "../context/index";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/Forms/authForm";

const Register = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const [name, setName] = useState("Sam");
  const [email, setEmail] = useState("samunyi90@gmail.com");
  const [password, setPassword] = useState("123456");
  const [cpassword, setCpassword] = useState("123456");
  const [secret, setSecret] = useState("red");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
        cpassword,
        secret,
      });

      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setSecret("");
        setOk(data.ok);
        setLoading(false);
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
          <h1>Register</h1>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-md-6 offset-md-3">
          <AuthForm
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
            <p>Your have successfully registerd.</p>
            <Link href="/login">
              <a className="btn btn-primary btn-sm">Login</a>
            </Link>
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

export default Register;
