import React from 'react'
import styled from 'styled-components/macro'

const Paragraph = styled.p`
  width: 75%;
  text-align: center;
  margin: 40px auto;
`

export const About = () => {
  return (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      efficitur dapibus lectus, in accumsan velit consectetur non. Sed id
      laoreet sem. Suspendisse molestie commodo felis, non accumsan urna
      placerat in. Donec eget aliquet mauris. Nam non turpis rhoncus, lobortis
      justo id, tempus nunc. Proin nec urna sed justo rutrum molestie ac eu
      felis. Aenean elementum est ac molestie cursus. Nam vulputate fermentum
      diam sed pulvinar. Fusce aliquet, justo ac condimentum mollis, metus
      tortor pulvinar elit, a ornare nisi erat et ipsum. Curabitur eget nulla
      quis velit rhoncus porta id a massa. Nam elementum, nisl ut blandit
      mattis, enim dui ultricies nibh, ut faucibus diam quam non felis. Nullam
      ac dui in urna ultrices pellentesque. Ut et tempus ex, in lacinia sem.
      Integer at elit vel tortor ornare fermentum. Aliquam convallis varius
      lacus, eget sollicitudin nunc commodo in.
    </Paragraph>
  )
}

export default About
