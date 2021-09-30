import {useState,useEffect} from 'react';
import {accessToken, logout} from './spotify.js';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import {GlobalStyle, StyledMainScreen} from './styles'
import {LoginPage, Profile, TopArtists,TopTracks,Playlists, Playlist} from './pages';
import styled from 'styled-components/macro';
import {NavBar} from './components';

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
function App() {
  const [token,setToken] = useState(null);
  useEffect(()=>{
    setToken(accessToken);
  },[]);
  return (
    <div className="App">
   
    <GlobalStyle/>
      <header className="App-header">
               {!token ? (
          <LoginPage/>
        ) : (<div>
          
          <StyledMainScreen>
          <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
          <Router>
          <NavBar/>
          <ScrollToTop/>
            <Switch>
              <Route path="/top-artists">
              <TopArtists/>
                
              </Route>
              <Route path="/top-tracks">
                <TopTracks/>
              </Route>
              <Route path="/playlists/:id">
                <Playlist/>
              </Route>
              <Route path="/playlists">
                <Playlists/>
              </Route>
              <Route path="/">
                <Profile/>
              </Route>
              </Switch>
            </Router>
            </StyledMainScreen>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
