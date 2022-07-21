import './App.css';
import HomeHeader from './components/headers/homeHeader';
// import default style
import 'rsuite/dist/rsuite.min.css';
import PrincipalFooter from './components/footer/principalFooter';
import { Container, Content, Footer, Header } from 'rsuite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sample from './pages/sample/sample';
import LoginForm from './pages/login/loginForm';
import HomePosts from './pages/home/homePosts';

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
                <Route path="/" element={<HomePosts />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/profile" element={<Sample />} />
                <Route path="/myposts" element={<Sample />} />
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
