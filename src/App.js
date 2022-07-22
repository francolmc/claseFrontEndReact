import './App.css';
import HomeHeader from './components/headers/homeHeader';
// import default style
import 'rsuite/dist/rsuite.min.css';
import PrincipalFooter from './components/footer/principalFooter';
import { Container, Content, Footer, Header } from 'rsuite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/loginForm';
import HomePosts from './pages/home/homePosts';
import ProtectedRoute from './components/router/ProtectedRoute';
import ShowProfile from './pages/profile/showProfile';
import ChangePassword from './pages/profile/changePassword';
import EditProfile from './pages/profile/editProfile';
import MyPostsList from './pages/myPosts/myPostsList';
import EditPost from './pages/myPosts/editPost';
import NewPost from './pages/myPosts/newPost';

function App() {
  return (
    <>
      <div className="show-fake-browser navbar-page">
        <Container>
          <Header>
            <HomeHeader />
          </Header>
          <Content>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ProtectedRoute><HomePosts /></ProtectedRoute>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/profile" element={<ShowProfile />} />
                <Route path="/profile/change-password" element={<ChangePassword />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/myposts" element={<MyPostsList />} />
                <Route path="/myposts/:id/edit" element={<EditPost />} />
                <Route path="/myposts/new" element={<NewPost />} />
                <Route path="/logout" element={() => (<></>)} />
              </Routes>
            </BrowserRouter>
          </Content>
          <Footer className='footer'>
            <PrincipalFooter/>
          </Footer>
        </Container>
      </div>
    </>
  );
}

export default App;
