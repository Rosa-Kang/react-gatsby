import React from 'react'
import {Button} from "../components/Button"
import {BoxContainer, FormContainer, Input, MutedLink, BoldLink} from "./common"

const SignupForm = (props) => {
    const (switchToSignup) = useContext(AccountContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="password" placeholder="Full Name" />
                <Input type="email" placeholder="Email"/>            
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Button primary="true" round="true" to="/" css={` margin: 1.9em auto 0;`}>Signin</Button>
                <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink> </MutedLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default SignupForm
