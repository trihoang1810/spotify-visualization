import styled from 'styled-components/macro';

const StyledNavBar = styled.div`
    width: 100px;
    position: fixed;
    left:0;
    top:0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px){
        width: 100vw;
        bottom:0;
        top:auto;
        height: 60px;
        z-index: 100;
        flex-direction: row;

    }
    .nav__logo{
        margin-top: 10px;
        width:100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px){
            display:none;
        }
    }
    ul.nav__list{
        width: 100px;
        height: 400px;
        margin:0;
        padding:0;
        list-style: none;
        display:grid;
        grid-template-rows: repeat(4,1fr);
        @media (max-width: 768px){    
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: 1fr;
            z-index: 999999;
            width: 100vw;
            height: 60px;
        }
        .nav__item{
            font-size: 12px;
            color: var(--light-grey);
            text-decoration:none;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            transition: all .3s ease-in-out;
            background-color: var(--black);
            border-left: 5px solid var(--black);
            @media (max-width: 768px) {
            border-bottom: 5px solid var(--black);
            border-left: none;
            }
            svg{
                height:20px;
                width: 20px;
                margin-bottom: 5px;
                color: var(--light-grey);
                display:flex;
                align-items: center;
            }
            &:hover,
            &:focus{
                cursor: pointer;
                border-left: 5px solid var(--green);
                background-color: var(--dark-grey);
                svg{
                    color: var(--white);
                }
                @media (max-width: 768px) {
                    border-bottom: 5px solid var(--green);
                    border-left:none;
                }
            }
            
        }
        .active{
                cursor: default;
                color: var(--white);
                border-left: 5px solid var(--green);
                background-color: var(--dark-grey);
                svg{
                    color: var(--white);
                }
                @media (max-width: 768px) {
                    border-bottom: 5px solid var(--green);
                    border-left:none;
                }
            }
    }
`
export default StyledNavBar;