import PostFeed from "./post-feed";
import PostReactions from "./post-reactions";
import PostComments from "./post-comments";

function postContainer() {
  return (
    <div className="post-ctr">
          <h2> Post Feed Container </h2>
          <div className="post-inner-ctr">
              <PostFeed />
              <PostReactions />
              <PostComments/>
              

          </div>
    </div>
  );
}

export default postContainer;
