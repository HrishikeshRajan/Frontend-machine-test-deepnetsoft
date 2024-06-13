/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Heading = ({Level ='h1', children, ...rest}) => {
  return (
    <Level {...rest}>{children}</Level>
  )
}

export default Heading