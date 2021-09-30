import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
height: 100vh;
width: 100vw;

  h1{
    color: var(--white);
    font-size: 100px;
    position: relative;
    @media (min-width: 768px){
      font-size: 150px;
    }
    &::after {
      content: 'profile';
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 400;
      letter-spacing:10px;
      position: absolute;
      bottom: -5px;
      right: 70px;
      @media (min-width: 768px){
        font-size: 30px;
      }
    }
  }
  p{
    color: var(--white);
    font-size: 14px;
    letter-spacing: 3px;
    font-weight: 400;
  }
`

const StyledLoginButton = styled.a`
display: inline-block;
background-color: var(--green);
color: var(--white);
border-radius:var(--border-radius-pill);
font-weight: 700;
font-size:var(--fz-lg);
padding: var(--spacing-sm) var(--spacing-xl);

&:hover,
&:focus {
    text-decoration: none;
    filter: brightness(1.1);
}
`
const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://your-spotify-profile.herokuapp.com/login';

const LoginPage = () => (
  <StyledLoginContainer>
    <h1>Spotify</h1>
    <StyledLoginButton href={LOGIN_URI}>
      Log in to Spotify
    </StyledLoginButton>   
    <p>Tri Hoang Minh</p>
  </StyledLoginContainer>
);

export default LoginPage;