import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams
} from 'react-router-dom';

const Post = () => {
  return <>
    <h1>Post Parent</h1>
    <Outlet />
  </>;
};
const PostId = () => {
  let params = useParams();
  return <p>Post ID : {params.postId}</p>;
};
const Todo = () => {
  return <p>This is Todo Page<br/>
  <Logout />
  </p>;
};
const Login = () => {
  return <p>This is Login Page<br/>
  </p>;
};
const Logout = () => {
  const navigate = useNavigate();
  const logoutEvent = () => {
    navigate("/login",{ replace: false });
  }
  return <button onClick={logoutEvent}>Logout</button>;
};
const Register = () => {
  return <p>This is Register Page</p>;
};
const Home = () => {
  return <p>INDEX</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/register">
            <p>Register</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo</p>
          </NavLink>
          <NavLink to="/post/6666666">
            <p>Post</p>
          </NavLink>
        </div>
        {/* Routes, Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route path='post' element={<Post />}>
            <Route path=':postId' element={<PostId />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
