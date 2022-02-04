import { Avatar } from "antd";
import {
  SyncOutlined,
  CameraOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
//import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  loading,
  uploading,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-body pb-3">
        <form className="form-group">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="form-control"
            placeholder="Write something..."
          />
        </form>
      </div>

      <div className="card-footer d-flex justify-content-between text-muted">
        <button
          disabled={!content || loading}
          onClick={postSubmit}
          className="btn btn-primary btn-sm"
        >
          {loading ? <SyncOutlined spin /> : "Post"}
        </button>

        <label>
          {image && image.url ? (
            <Avatar size={30} src={image.url} className="mt-1" />
          ) : uploading ? (
            <LoadingOutlined className="mt-2" />
          ) : (
            <CameraOutlined className="mt-2" />
          )}
          <input onChange={handleImage} type="file" accept="images/*" hidden />
        </label>
      </div>
    </div>
  );
};

export default PostForm;
