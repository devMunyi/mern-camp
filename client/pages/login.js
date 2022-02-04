import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/Forms/authForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [state, setState] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });

      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        //update context
        setState({
          user: data.user,
          token: data.token,
        });

        //save in local storage
        window.localStorage.setItem("auth", JSON.stringify(data));
        return router.push("/user/dashboard");
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  if (state && state.token) router.push("/user/dashboard");

  return (
    <div className="container-fluid">
      <div className="row py-3 bg-default-image text-light">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            loading={loading}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet a member? &nbsp;
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            <Link href="/forgot-password">
              <a className="text-danger">Forgot password</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
