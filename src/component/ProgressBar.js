import React from 'react';
import useStorage from '../hooks/useStorage';
import '../index.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {

  const { url, progress } = useStorage(file);    //this will call the useEffect() from useStorage.js file and will fire the events and get all the data needed
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar;
