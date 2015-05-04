var PostFooter = React.createClass({
  render: function(){
    return(
      <footer>
        <p className="post__meta">
          <time timestamp="">created on: {this.props.date} </time> by
          <strong> {this.props.author} </strong>
        </p>
      </footer>
    );
  }
});
