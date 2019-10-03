import React from 'react'
import PropTypes from 'prop-types'

const IconBarbell = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
    <path d="M 10.5 8.25 L 10.5 11.25 L 13.5 11.25 L 13.5 8.25 C 13.5 7.007812 14.507812 6 15.75 6 C 16.992188 6 18 7.007812 18 8.25 L 18 9.128906 C 18.234375 9.046875 18.488281 9 18.75 9 C 19.992188 9 21 10.007812 21 11.25 L 22.5 11.25 C 22.914062 11.25 23.25 11.585938 23.25 12 C 23.25 12.414062 22.914062 12.75 22.5 12.75 L 21 12.75 C 21 13.992188 19.992188 15 18.75 15 C 18.488281 15 18.234375 14.953125 18 14.871094 L 18 15.75 C 18 16.992188 16.992188 18 15.75 18 C 14.507812 18 13.5 16.992188 13.5 15.75 L 13.5 12.75 L 10.5 12.75 L 10.5 15.75 C 10.5 16.992188 9.492188 18 8.25 18 C 7.007812 18 6 16.992188 6 15.75 L 6 14.871094 C 5.765625 14.953125 5.511719 15 5.25 15 C 4.007812 15 3 13.992188 3 12.75 L 1.5 12.75 C 1.085938 12.75 0.75 12.414062 0.75 12 C 0.75 11.585938 1.085938 11.25 1.5 11.25 L 3 11.25 C 3 10.007812 4.007812 9 5.25 9 C 5.511719 9 5.765625 9.046875 6 9.128906 L 6 8.25 C 6 7.007812 7.007812 6 8.25 6 C 9.492188 6 10.5 7.007812 10.5 8.25 Z M 18 12.75 C 18 13.164062 18.335938 13.5 18.75 13.5 C 19.164062 13.5 19.5 13.164062 19.5 12.75 L 19.5 11.25 C 19.5 10.835938 19.164062 10.5 18.75 10.5 C 18.335938 10.5 18 10.835938 18 11.25 Z M 16.5 11.25 L 16.5 8.25 C 16.5 7.835938 16.164062 7.5 15.75 7.5 C 15.335938 7.5 15 7.835938 15 8.25 L 15 15.75 C 15 16.164062 15.335938 16.5 15.75 16.5 C 16.164062 16.5 16.5 16.164062 16.5 15.75 Z M 6 11.25 C 6 10.835938 5.664062 10.5 5.25 10.5 C 4.835938 10.5 4.5 10.835938 4.5 11.25 L 4.5 12.75 C 4.5 13.164062 4.835938 13.5 5.25 13.5 C 5.664062 13.5 6 13.164062 6 12.75 Z M 7.5 12.75 L 7.5 15.75 C 7.5 16.164062 7.835938 16.5 8.25 16.5 C 8.664062 16.5 9 16.164062 9 15.75 L 9 8.25 C 9 7.835938 8.664062 7.5 8.25 7.5 C 7.835938 7.5 7.5 7.835938 7.5 8.25 Z M 7.5 12.75 "/>
  </svg>
)
IconBarbell.propTypes = {
  color: PropTypes.string,
}

export default IconBarbell
