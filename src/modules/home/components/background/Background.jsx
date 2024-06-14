/* eslint-disable react/prop-types */

import Card from '../card/Card'

const Background = ({url, children, width = '100vh', ...rest}) => {
  return (
    <Card 
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url(${url})`,
        minHeight: width
     }}
     {...rest}
    >
        {children}
    </Card>
  )
}

export default Background