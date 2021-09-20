import React, {useContext} from 'react'
import {Button} from "../components/Button"
import { BoxContainer, FormContainer, Input, MutedLink, BoldLink } from "./common"
import { AccountContext } from './accountContext'

const LoginForm = (props) => {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>            
                <Input type="password" placeholder="Password" />
                <MutedLink href="#">Forgot your password? </MutedLink>
                <MutedLink href="/signup">Don't have an account? <BoldLink href="/signup" onClick={ switchToSignup}>Signup</BoldLink> </MutedLink>
                <Button primary="true" round="true" to="/" css={` margin: 1.9em auto 0;`}>Submit</Button>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm

