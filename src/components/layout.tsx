import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x:0, y:20 },
    enter: { opacity: 1, x:0, y:0},
    exit: { opacity: 0, x:-0, y:20 },
}

type Props = {
    children: any;
    title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
    const t = `${title} - Joseph Blackledge`
    return(
        <motion.article
            initial = "hidden"
            animate = "enter"
            variants = {variants}
            exit = "exit"
            transition={{ duration: 0.6, type:'easeInOut' }}
            style = {{position: 'relative' }}
        >
        <>
            { title && (
                <title>{t}</title>
            )}
            {children}
        </>

        </motion.article>
    )
}

export default Layout;
