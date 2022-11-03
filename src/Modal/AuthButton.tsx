import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../Atom/AuthModalAtom'


const AuthButton: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <> 
     <Icon  as={FaUser} w="30px" h={"30px"} color="#44533c"   onClick={() => setAuthModalState({ open: true, view: 'login' })}   />
     
    </>
  )
}
export default AuthButton