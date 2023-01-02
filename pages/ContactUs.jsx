import React from 'react'
import Form from '../components/contact/Form';
import {useTransform,
    useMotionValue, 
    motion} from 'framer-motion' 

function ContactMain() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const xposition1 = useTransform(x,[0,2000],[-10,10]);
	const xposition3 = useTransform(x,[0,2000],[-30,30]);

	const yposition1 = useTransform(y,[0,2000],[-10,10]);
	const yposition3 = useTransform(y, [0, 2000], [-30, 30]);
	const handleMouse=(e)=>{
		x.set(e.pageX);
		y.set(e.pageY);
		console.log(x,y, "x,y")
	}
	return (
		<div style={{background: "linear-gradient(178.63deg, #1C1E56 3.09%, #8E3A3A 98.83%)"}} 
			 className='flex w-full md:h-[100vh] h-[70vh] flex-row justify-center align-middle mb-[20vw]' 
			 onMouseMove={(e)=>handleMouse(e)}>

			<motion.div className='absolute z-20 w-full h-[100%] bg-clouds bg-no-repeat bg-cover '
						style={{
						translateX:xposition1,
						translateY:yposition1
						}}/>
				
			<motion.div className='absolute z-20 md:w-[110vmax] md:h-[120%] w-[115%] h-[75%] mb-12 bg-ground bg-no-repeat bg-cover '
						style={{
						translateX:xposition3,
						translateY: yposition3,
						}}/>

			<motion.div className='md:block hidden absolute z-10 md:w-[110%] h-[20vmax] bg-road bg-no-repeat bg-contain  bottom-[-30vw] left-[-2vw] '
						style={{
						translateX: xposition3,
						translateY: yposition3,
						}}/>
			<Form />
			
		</div>
	)

}
export default ContactMain