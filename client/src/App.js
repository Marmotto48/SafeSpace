import { Switch, Route,  BrowserRouter as Router, } from "react-router-dom";
import Homepage from "./components/pages/Homepage/homePage";
import { Navbar } from "./components/Navbar/navba";
import { Footer } from "./components/Footer/footer";
import About from "./components/pages/About/about";
import Doctors from "./components/pages/Doctors/doctors";
import Blog from "./components/pages/Blog/blog";
import LoginUser from "./components/pages/LogReg/loginUser";
import { PrivateRoute } from "./components/router/PrivateRoute";
import { DocRoute } from "./components/router/DocRoute";
import { AdminRoute } from "./components/router/AdminRoute";
import UserProfile from "./components/pages/Profile/userProfile";
import Addapost from "./components/pages/Blog/wrtitePost";
import FAQ from "./components/pages/Questions/faq";
import PostPage from "./components/pages/Blog/postPage";
import PrivateBlog from "./components/pages/Blog/blogPrivate";
import Test from "./components/Test";
import AdminDashboard from "./components/pages/Profile/adminDash";
import Chat from "./components/chat/chat";
// import NotFound from "./components/NotFound/notFound";
// import { Redirect } from 'react-router'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Navbar />
        <Switch>
          {/* <Route path='*' component={NotFound} ><Redirect to="/404" /></Route> */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/blog" component={Blog} />
          <DocRoute exact path="/blog/private" component={PrivateBlog} />
          <Route exact path="/login" component={LoginUser} />
          <PrivateRoute exact path="/profile/:id" component={UserProfile} />
          <PrivateRoute exact path="/blog/newPost" component={Addapost} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/blog/post/:id" component={PostPage} />
          <PrivateRoute exact path="/test" component={Test} />
          <AdminRoute exact path="/admindashboard" component={AdminDashboard} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
