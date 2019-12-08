import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {

    //array destructuring
    // 1st element gets assigned to resource
    // 2nd element to setResource
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>
                    Posts
                </button>
                <button onClick={() =>  setResource('todos')}>
                    todos
                </button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}
/*class App extends React.Component {
    state = { resource: 'post' };

    render() {
        return (
        <div>
            <div>
                <button onClick={() => this.setState({ resource: 'posts' })}>
                    Posts
                </button>
                <button onClick={() => this.setState({ resource: 'todos' })}>
                    todos
                </button>
            </div>
            {this.state.resource}
        </div>);
    }
}
*/
export default App;