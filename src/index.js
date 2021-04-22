import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import './styles/styles.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store/store";
import {config} from "./config/config";
import setTheme from './styles/themeSelector';
import actions from './reducers/boundActionCreators';
import RootStore from './store/RootStore';

// determine if this is a small screen
actions.updateIsScreenSmall(window.innerWidth < 900);
window.addEventListener("resize", function() {
    actions.updateIsScreenSmall(window.innerWidth < 900);
});

//set theme using system defaults or local storage
setTheme();

export const MobxContext = React.createContext();

function App() {

    return (
        <Provider store={store}>
            <MobxContext.Provider value={new RootStore()}>
                <Router>
                    <Switch>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </Router>
            </MobxContext.Provider>
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
