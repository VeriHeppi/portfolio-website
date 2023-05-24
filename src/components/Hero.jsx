import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#815eff]' />
          <div className='w-1 sm:h-80 h40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#915eff]'>Roope</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I&apos;m a cyber security specialist, guardian of the digital realm. As a full stack developer, 
          I craft web and mobile apps, while exploring the frontiers of AI. 3D graphics and game development 
          fuel my imagination. With each keystroke, I shape a future where technology breaks boundaries and sparks 
          limitless possibilities.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero