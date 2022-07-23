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

function App() {
  return (
    <>
      <div className="show-fake-browser navbar-page">
      <BrowserRouter>
          <Container>
            <Header>
              <HomeHeader />
            </Header>
            <Content className='content-site'>
                <Routes>
                  <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="/posts" element={<ProtectedRoute><HomePosts /></ProtectedRoute>} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/profile" element={<ProtectedRoute><ShowProfile /></ProtectedRoute>} />
                  <Route path="/profile/change-password" element={<ChangePassword />} />
                  <Route path="/profile/edit" element={<EditProfile />} />
                  <Route path="/myposts" element={<MyPostsList />} />
                  <Route path="/myposts/:id/edit" element={<EditPost />} />
                  <Route path="/myposts/new" element={<NewPost />} />
                  <Route path="/logout" element={() => (<></>)} />
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
