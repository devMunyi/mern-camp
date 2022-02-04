import renderHTML from "react-render-html";
import { useContext } from "react";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../../components/images/PostImage";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

const PostList = ({
  posts,
  handleLike,
  handleUnlike,
  handleDelete,
  loading,
}) => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header">
              {post.postedBy && post.postedBy.image ? (
                <Avatar size={40} src={post.postedBy.image.url} />
              ) : (
                <Avatar size={40}>{post.postedBy.name[0]}</Avatar>
              )}

              <span className="pt-2" style={{ marginLeft: "1rem" }}>
                {post.postedBy.name}
              </span>

              <span className="pt-2" style={{ marginLeft: "1rem" }}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
            <div className="card-body">
              <div>{renderHTML(post.content)}</div>
            </div>
            <div className="card-footer">
              {post.image && <PostImage url={post.image.url} />}
              <div className="d-flex pt-2">
                {post.likes.includes(state.user._id) ? (
                  <HeartFilled
                    onClick={() => handleUnlike(post._id)}
                    className="h5 text-danger pt-2"
                  />
                ) : (
                  <HeartOutlined
                    onClick={() => handleLike(post._id)}
                    className="h5 text-danger pt-2"
                  />
                )}
                <div className="pt-2 px-2">{post.likes.length} likes</div>

                <CommentOutlined
                  className="h5 text-danger pt-2"
                  style={{ marginLeft: "1.5rem" }}
                />
                <div className="pt-2 px-2">2 Comments</div>

                {state && state.user && state.user._id === post.postedBy._id && (
                  <>
                    <EditOutlined
                      onClick={() => router.push(`/user/post/${post._id}`)}
                      className="h5 text-danger pt-2 mx-auto"
                    />
                    <label>
                      {loading ? (
                        <LoadingOutlined className="mt-2" />
                      ) : (
                        <DeleteOutlined
                          onClick={() => handleDelete(post)}
                          className="h5 text-danger pt-2"
                        />
                      )}
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
