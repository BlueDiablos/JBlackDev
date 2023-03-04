import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const DivStyle = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

type Props = {
    children: any,
    delay: number 
}

const Section: React.FC<Props> = ({ children, delay }) => {
    return(
        <DivStyle
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         mb={6}
        >
        {children}
        </DivStyle>
    )
}

export default Section;
