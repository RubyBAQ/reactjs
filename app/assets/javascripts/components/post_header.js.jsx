var PostHeader = React.createClass({

  render: function(){
    return(
      <header className="post__header">
        <h1 className="post__title h2">{this.props.title}</h1>
      </header>
    );
  }
})
