var PostsList = React.createClass({
  render: function() {
    var postNodes = this.props.posts.map(function(post) {
      return <Post key={post.id} post={post} />;
    });

    return (
      <div className="post">
        {postNodes}
      </div>
    );
  }
});
