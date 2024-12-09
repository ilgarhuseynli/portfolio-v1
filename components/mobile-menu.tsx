import React from 'react';
import {AnimatePresence,motion} from "framer-motion";
import {MdClose} from "react-icons/md";
import {links} from "@/lib/data";

type MenuType = {
    open : any;
    setOpen : any;
}

const MobileMenu = ({open,setOpen} : MenuType) => {

    return (
        <AnimatePresence mode={'wait'} >
            {open && (
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={{duration: 0.3}}
                    className='fixed right-0 top-0 h-screen bg-primary z-20'
                >
                    <div className='flex flex-col items-end text-lg font-semibold uppercase bg-primary text-white '>
                        <button
                            onClick={() => setOpen(!open)}
                            className='p-2 hover:text-black duration-300'
                        >
                            <MdClose className={'text-4xl'}/>
                        </button>
                        <ul className='flex flex-col '>
                            {links.map((item) => (
                                <li key={item.hash}>
                                    <a
                                        className='block px-8 py-1 hover:bg-white hover:text-primary duration-300'
                                        href={item.hash}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;