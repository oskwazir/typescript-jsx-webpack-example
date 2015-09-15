import * as React from 'react';

interface Props {
  txt: string;
}

interface State{
  count: number;
}


// Render a simple React component into the body.
class App extends React.Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {count: 0}
    this.increment = this.increment.bind(this);
  }
  static defaultProps = {
    txt: 'default props txt'
  }

  increment(){
    this.setState({count: this.state.count+1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (
      <div>
      <h1>You have said hello {this.state.count} times.</h1>
      <button onClick={this.increment}>{this.props.txt} - {this.state.count}</button>
      </div>
    )
  }
  componentDidMount(){
    console.log('mounted')
  }
}

React.render(<App txt="Hello world!" />, document.body);
