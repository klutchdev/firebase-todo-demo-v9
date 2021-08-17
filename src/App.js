import { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loader";
import ShowError from "./components/ShowError";
import { AuthContext } from "./contexts/AuthContext";
const PostPage = lazy(() => import("./pages/PostPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
// const SettingsPage = lazy(() => import("./pages/SettingsPage"));

const App = () => {
  const { user, loading, error } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ShowError err={error} />;
  } else {
    return user ? (
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route exact path="/posts/:postId" render={(props) => <PostPage {...props} />} />
            <Route component={HomePage} exact path="/profile" />
            <Route component={PostsPage} path="/" />
          </Switch>
        </Router>
      </Suspense>
    ) : (
      <Suspense fallback={<Loading />}>
        <Router>
          <Route component={SignInPage} path="/" />
        </Router>
      </Suspense>
    );
  }
};

export default App;
