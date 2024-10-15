import React from 'react'
import { Element } from 'react-scroll'
import { links } from '../constants'

const Donwload = () => {
  return (
    <section>
      <Element name='Donwload' className='g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16'>
        <div className='container'>
          <div className='flex items-center'>
            <div className='realtive mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100'>
              <div className='mb-10'>
                <img  
                  src="/images/xora.svg"
                  alt="xora logo"
                  width={160}
                  height={55}
                />
              </div>

              <p className='body-1 mb-10 max-w-md'>
                Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.
              </p>
              <ul className='flex flex-wrap items-center gap-6'>
                {links.map(({ id, url, icon }) => (
                  <li key={id} className='donwload_tech-link'>
                    { url }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Donwload