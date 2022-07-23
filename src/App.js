import './App.css';
import HomeHeader from './components/headers/homeHeader';
// import default style
import 'rsuite/dist/rsuite.min.css';
import PrincipalFooter from './components/footer/principalFooter';
import { Container, Content, Footer, Header } from 'rsuite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/loginForm';
import HomePosts from './pages/home/homePosts';
import ShowProfile from './pages/profile/showProfile';
import ChangePassword from './pages/profile/changePassword';
import EditProfile from './pages/profile/editProfile';
import MyPostsList from './pages/myPosts/myPostsList';
import EditPost from './pages/myPosts/editPost';
import NewPost from './pages/myPosts/newPost';
import Home from './pages/home/home';
import { ProtectedRoute } from './components/router/ProtectedRouter';
import RegisterUser from './pages/register/registerUser';
import SuccessRegister from './pages/register/successRegister';
import LoginHeader from './components/headers/loginHeader';

function App() {
  return (
    <>
      <div className="show-fake-browser navbar-page">
      <BrowserRouter>
          <Container>
            <Header>
              {localStorage.getItem('access_token') ? <HomeHeader /> : <LoginHeader />}
            </Header>
            <Content className='content-site'>
                <Routes>
                  <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="/posts" element={<ProtectedRoute><HomePosts /></ProtectedRoute>} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterUser />} />
                  <Route path="/register/success" element={<SuccessRegister />} />
                  <Route path="/profile" element={<ProtectedRoute><ShowProfile /></ProtectedRoute>} />
                  <Route path="/profile/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                  <Route path="/profile/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
                  <Route path="/myposts" element={<ProtectedRoute><MyPostsList /></ProtectedRoute>} />
                  <Route path="/myposts/:id/edit" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
                  <Route path="/myposts/new" element={<ProtectedRoute><NewPost /></ProtectedRoute>} />
                </Routes>
            </Content>
            <Footer className='footer'>
              <PrincipalFooter/>
            </Footer>
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
