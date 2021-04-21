import React from 'react'
import { useState } from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

function Modal({ selectedImg, setSelectedImg }) {

  const [likes, setLikes] = useState(3);

  const { docs } = useFirestore('images');

  function deleteHandler(e) {
    alert("going to add delete function soon")
  }

  function handleClick(e) {

    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="Enlarged picture"
        initial={{ y: "20vh" }}
        animate={{ y: 0 }}

      />
      {/* <button onClick={deleteHandler}>delete me</button> */}
      {/* <button className="likeButton" onClick={() => setLikes(likes + 1)}>Like {likes}</button> */}
    </motion.div>

  )
}

export default Modal
