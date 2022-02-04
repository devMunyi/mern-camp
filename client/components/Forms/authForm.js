import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  loading,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  cpassword,
  setCpassword,
  secret,
  setSecret,
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => (
  <form onSubmit={handleSubmit}>
    {profileUpdate && (
      <>
        <div className="form-group p-1">
          <small>
            <label className="text-muted">Username</label>
          </small>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group p-1">
          <small>
            <label className="text-muted">About</label>
          </small>
          <input
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            type="text"
            className="form-control"
            placeholder="write about yourself..."
          />
        </div>
      </>
    )}

    {page !== "login" && (
      <div className="form-group p-1">
        <small>
          <label className="text-muted">Your name</label>
        </small>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
    )}

    <div className="form-group p-1">
      <small>
        <label className="text-muted">Email address</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        placeholder="Enter email"
        disabled={profileUpdate}
      />
    </div>

    <div className="form-group p-1">
      <small>
        <label className="text-muted">Your password</label>
      </small>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>

    {page !== "login" && (
      <>
        <div className="form-group p-1">
          <small>
            <label className="text-muted">Confirm password</label>
          </small>
          <input
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>

        <div className="form-group p-1">
          <small>
            <label className="text-muted">Pick a question</label>
          </small>
          <select className="form-select">
            <option defaultValue>--select One</option>
            <option>What is your favorite color?</option>
            <option>What is your best friend's name?</option>
            <option>What city were you born?</option>
          </select>

          <small className="form-text text-muted">
            You can use this to reset your password if forgotten.
          </small>
        </div>

        <div className="form-group p-1">
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Write your answer here..."
          />
        </div>
      </>
    )}

    <div className="form-group p-1">
      <button
        disabled={
          profileUpdate
            ? loading
            : page === "login"
            ? !email || !password || loading
            : !name || !email || !password || !cpassword || !secret || loading
        }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin /> : "Submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
