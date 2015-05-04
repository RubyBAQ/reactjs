var Post = React.createClass({
  render: function() {
    var title = this.props.post.title,
        date = this.props.post.created_at,
        content = this.props.post.contents
        author = this.props.post.author;
    return (
      <article>
        <PostHeader title={title}  />
        <PostContent content={content} />
        <PostFooter date={date} author={author}  />
      </article>
    );
  }
});
