class ChildA extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.greeting}, {this.props.name}!
        </p>
      </div>
    );
  }
}
export default ChildA;
