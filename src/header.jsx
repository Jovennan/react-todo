var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      text: ''
    }
  },
  render: function(){
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control"/>
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
    </div>

  },
  handleClick: function() {
    // console.log('I was clicked');
    // send the value of text input to firebase
    // console.log(this.state.text);
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    this.setState({text: ''});
  },
  handleInputChange: function(event){
    // console.log(event.target.value);
    this.setState({text: event.target.value});
  }
});
