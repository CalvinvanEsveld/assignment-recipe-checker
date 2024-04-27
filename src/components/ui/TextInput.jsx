import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn, ...props }) => {
  return <Input onChange={changeFn} {...props}/>
};