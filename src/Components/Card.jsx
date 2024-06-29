import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/50 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt/>
      <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0 '>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
        <h4>{data.filesize} </h4>
        <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
          {data.close ? <IoClose/> : <LuDownload size=".7em" color='white'/>}
        </span>
        </div>
        {data.tag.isOpen &&(
        <div className= {`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}  flex items-center justify-center`} >
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle} </h3>
        </div>
        )} 
      </div>
      </motion.div>
  );
}

export default card