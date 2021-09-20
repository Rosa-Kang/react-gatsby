import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LoginForm from './LoginForm'
import SignupForm from './signupForm'
import { AccountContext } from './accountContext'

const AccountBox = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("singin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000)
  }

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  }

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  }

  const contextValue = { switchToSignup, switchToSignin }
  
    return (
      <AccountContext.Provider value= {contextValue}>
        <BoxContainer>
            <TopContainer>
          <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} />
              {active === "signin" && <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>}
              {active === "signup" && <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>}
              </TopContainer>
              <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
              </InnerContainer>
            </BoxContainer>
      </AccountContext.Provider>
   
    )
}

export default AccountBox


const BoxContainer = styled.div`
  width: 380px;
  min-height: 550px;
  display: flex;
  margin: 8vw auto;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5em 2em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #F26A2E;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.8em 0.4em;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.0,
  stiffness: 30,
};