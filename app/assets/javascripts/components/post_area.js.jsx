var PostArea = React.createClass({
  getInitialState: function(){
    return{
      posts: this.props.initialPosts,
      form: this.props.form
    };
  },
  handlePostSubmit: function(formData, action){
    var _this = this;
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
    }).done(function(data){
      var posts = _this.state.posts;
      posts.unshift(data);
      _this.setState({posts: posts});
    });
  },
  calculateTotal: function(){
    return this.state.posts.length
  },
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <PostsList posts={this.state.posts} />
          </div>
          <div className="col-md-4">
            <PostForm form={ this.state.form } onCommentSubmit={ this.handlePostSubmit } />
            <PostStats total={this.calculateTotal()} />
          </div>
        </div>
      </div>
    );
  }
});
