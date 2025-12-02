import { cloneElement } from 'react'
import './Section.css'

//SctickySection
const Section = ({ id, className = '', children, customRef, enableScrollAnimation = false }) => {
  return (
    <section id={id} className={`section ${className}`} ref={customRef} data-scroll-animation={enableScrollAnimation}>
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section
