import Image from 'next/image'
import ban from '../fruits/banner-1.jpg'
import can from '../fruits/banner-2.jpg'

function Fruits() {
  return (
    <div className='pl-[200px] pr-[200px] flex flex-wrap justify-between pt-8 pb-10 sm:absolute sm:top-[423%] sm:pl-[0] sm:pr-[0]'>
        <Image src={ban} width={540} height={400} className='sm:max-w-[393px] sm:pl-[15px]'/>
        <Image src={can} width={540} height={400} className='sm:max-w-[393px] sm:pl-[15px]'/>
    </div>
  )
}

export default Fruits
