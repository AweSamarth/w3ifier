import { useEffect, useState } from 'react'
import styles from '../styles/another.module.css'

function MyComponent() {
  // Declare state variables to store the text and the opacity
  const [text, setText] = useState('Initial text')
  const [opacity, setOpacity] = useState(1)
  const [scrolled, setScrolled] = useState(false)  // Define the scrolled state variable
  useEffect(() => {
    // Define the event handler function
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > window.innerHeight/2) {
        if (window.scrollY > window.innerHeight) {
          setText('Third text')
        } else {
          setText('New text')
        }
        setScrolled(true)  // Update the scrolled state variable
      } else {
        setText('Initial text')
        setScrolled(false)  // Update the scrolled state variable
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <div className={styles.page}>
        {/* Set the transition style on the outer div element */}
        <div id ="thetext" className={`fixed transition-opacity duration-200 ${scrolled?"opacity-50":"opacity-100"}`}>
          {/* Set the opacity style on the inner div element */}
          <div>{text}</div>
        </div>
      </div>

      
      <div>

      </div>
    </div>
  )
}

export default MyComponent
