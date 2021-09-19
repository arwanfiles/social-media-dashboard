import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { store } from 'services/store';
import { Provider } from 'react-redux';

import LayoutAuthenticated from 'layouts/authenticated';

import PagePosts from 'pages/posts';
import PagePostDetail from 'pages/posts/detail';
import PageAlbums from 'pages/albums';
import PageAlbumDetail from 'pages/albums/detail';
import PageUsers from 'pages/users';
import PageUserDetail from 'pages/users/detail';

const Routes = () => (
    <Switch>
        <Route path="/dashboard" component={PageUsers} />
        <Route path="/posts/:id" component={PagePostDetail} />
        <Route path="/posts" component={PagePosts} />
        <Route path="/albums/:id" component={PageAlbumDetail} />
        <Route path="/albums" component={PageAlbums} />
        <Route path="/users/:id" component={PageUserDetail} />
        <Route path="/users" component={PageUsers} />
        <Route path="/" exact>
            <Redirect to="/dashboard" />
        </Route>
    </Switch>
);

function App () {
    return (
        <Provider store={store}>
            <Router>
                <LayoutAuthenticated>
                    <Routes />
                </LayoutAuthenticated>
            </Router>
        </Provider>
    );
}

export default App;
