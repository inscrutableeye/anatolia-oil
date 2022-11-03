import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '../Atom/AuthModalAtom'
import Login from '../Components/Login/Login'
import { SignUp } from '../Components/SignUp/SignUp'



type AuthInputProps = {}

const AuthInput: React.FC<AuthInputProps> = () => {
  const modalState = useRecoilValue(authModalState)
  return (
    <Flex direction={'column'} align='center' width={'100%'} mt='4'>
      {modalState.view === 'login' && <Login />}
      {modalState.view === 'signup' && <SignUp />}
    </Flex>
  )
}
export default AuthInput