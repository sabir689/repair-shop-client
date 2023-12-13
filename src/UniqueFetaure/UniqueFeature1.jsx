
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const UniqueFeature1 = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div>
        <div className="p-8">
          <h2 className="text-3xl underline text-center">Processes</h2>
          <h1 className="text-center text-6xl font-bold">Three Step Solution</h1>
        </div>
        <motion.div
          className="grid grid-cols-3 flex gap-6 p-8 text-center"
          variants={container}
        >
          {/* Card 1 */}
          <motion.div className="card py-20 border-2 bg-base-100 shadow-xl" variants={item}>
            <figure className="px-10 pt-10">
              <img src="https://i.ibb.co/zNmrr1r/new.webp" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Bring Damage Devices Or Anything</h2>
              <p>Experienced service department ready to handle all of your auto service needs.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="card py-20 border-2 bg-base-100 shadow-xl" variants={item}>
            <figure className="px-10 pt-10">
              <img src="https://i.ibb.co/BtHMzN7/new2.webp" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Diagnosis & Solve Issues</h2>
              <p>Experienced service department ready to handle all of your auto service needs.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="card py-20 border-2 bg-base-100 shadow-xl" variants={item}>
            <figure className="px-10 pt-10">
              <img src="https://i.ibb.co/dtKw5GQ/new3.webp" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Return Perfect Devices</h2>
              <p>Experienced service department ready to handle all of your auto service needs.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div className="flex justify-center p-7">
          <button className="border-2 p-4 text-center rounded-3xl hover:bg-green-500 font-bold">
            Book An Appointment
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UniqueFeature1;
