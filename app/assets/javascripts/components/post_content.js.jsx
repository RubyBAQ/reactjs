var PostContent = React.createClass({
  render: function(){
    return(
      <p className="post__content">
        {this.props.content}
      </p>
    );
  }
});
