import '../assets/styles/Feed.css'
import PostContainer from './post-container'
import SideMenu from './side-menu'

function feedContainer() {
  return (
    <div className="feed-ctr">
      <h1> Feed Container </h1>
      <div className="inner-ctr">
        <SideMenu />
        <PostContainer />
      </div>
    </div>
  );
}

export default feedContainer;
