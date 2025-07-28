import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { gridItems } from '../../../data';

export default function Grid() {
  return (
    <section className='py-10'>

        <BentoGrid >
              { gridItems.map(
                ({id , title , description , className , img , imgClassName, 
                    titleClassName , spareImg
                })=>( <BentoGridItem
                               id={id} 
                               key={id}
                               title={title}
                               description={description}
                               className={className}
                               img={img}
                               imgClassName={imgClassName}
                               titleClassName={titleClassName}
                               spareImg={spareImg}
                               /> ))
       
       }

        </BentoGrid>
        
    
        
    </section>
  )
}
