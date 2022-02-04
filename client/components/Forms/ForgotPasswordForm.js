import { SyncOutlined } from "@ant-design/icons";

const ForgotPasswordForm = ({
  handleSubmit,
  loading,
  email,
  setEmail,
  newPassword,
  setNewPassword,
  cnewPassword,
  setCnewPassword,
  secret,
  setSecret,
}) => (
  <form onSubmit={handleSubmit}>
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
      />
    </div>

    <div className="form-group p-1">
      <small>
        <label className="text-muted">New password</label>
      </small>
      <input
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        className="form-control"
        placeholder="Enter new password"
      />
    </div>
    <>
      <div className="form-group p-1">
        <small>
          <label className="text-muted">Confirm New password</label>
        </small>
        <input
          value={cnewPassword}
          onChange={(e) => setCnewPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Confirm your new password"
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

    <div className="form-group p-1">
      <button
        disabled={!email || !newPassword || !cnewPassword || !secret || loading}
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin /> : "Submit"}
      </button>
    </div>
  </form>
);

export default ForgotPasswordForm;
