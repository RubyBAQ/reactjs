var PostForm = React.createClass({
  _handleSubmit: function(event){
    event.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var title = this.refs.title.getDOMNode().value.trim();
    var contents = this.refs.contents.getDOMNode().value.trim();

    if(!author || !contents || !title) return false;

    var formData = $( this.refs.form.getDOMNode() ).serialize();

    this.props.onCommentSubmit( formData, this.props.form.action );

    var author = this.refs.author.getDOMNode().value = "";
    var title = this.refs.title.getDOMNode().value = "";
    var contents = this.refs.contents.getDOMNode().value = "";
  },

  render: function(){
    return(
      <section>
        <h1 className="h3">Crea un nuevo Post</h1>
        <form ref="form" className="comment-form" onSubmit={this._handleSubmit} action={ this.props.form.action } accept-charset="UTF-8" method="post" >
          <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
          <div className="form-group">
            <input className="form-control" ref="title" name="post[title]" placeholder="Titulo del post" />
          </div>
          <div className="form-group">
            <input className="form-control" ref="author" name="post[author]" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <textarea className="form-control" ref="contents" name="post[contents]" placeholder="El contenido">
            </textarea>
          </div>

          <input className="btn btn-success btn-lrg" type="submit" value="Enviar Post" />
        </form>
      </section>
    );
  }

});
