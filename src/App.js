import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counter from './actions/counter.actions';
import * as todo from './actions/todo.actions';
import {Home} from './component/home/home';
import {Services} from './component/services/services';
import {About} from './component/about/about';
import {Header} from './component/header/header';

class App extends Component {
    constructor(props) {
        super(props);
        const {todo} = this.props;
        todo.addTodo("React");
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div className="App">
                        <Header/>
                        <div class="section">
                            <Route path="/" exact component={Home}/>
                            <Route path="/services" component={Services}/>
                            <Route path="/about" component={About}/>
                            <Redirect to="/" component={Home}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
    return {todo: state.todos[0]}
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: () => dispatch({type: 'ADD_TODO', text: "Done"}),
        counter: bindActionCreators(counter, dispatch),
        todo: bindActionCreators(todo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
