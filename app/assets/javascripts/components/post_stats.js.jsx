var PostStats = React.createClass({
  render: function(){
    return(
      <section>
        <h1 className="h3">Estadisticas</h1>
        <p>Total de posts: <strong>{this.props.total}</strong></p>
      </section>
    );
  }
});
