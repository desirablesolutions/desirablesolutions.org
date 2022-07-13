import { CustomPlaceholder } from 'react-placeholder-image';
import Image from 'next/image'


const Image = (props) => {

    return (
    
        <CustomPlaceholder
         width={200}
         height={100}
         backgroundColor="#123456"
         textColor="#ffffff"
         text="Hello World!"/>
    
    )
}

export default Image