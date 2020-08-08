import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => theme.spaces[1]} 0px;
`

const Section = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`

const NumberSection = styled(Section)`
  flex-grow: 0;
  width: 50px;
  margin-right: ${({ theme }) => theme.spaces[0]};
`

const Number = styled.div`
  width: 50px;
  height: 50px;
  font-family: ${({ theme }) => theme.font.main};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ea2626;
  color: ${({ theme }) => theme.fontColor.secondary};
`

const BoldText = styled(Text)`
  font-weight: bold;
`

const Anchor = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-family: ${({ theme }) => theme.font.main};
  color: #22a2dc;
`

const Card = ({ number, name, location, mapLocation }) => (
  <Container>
    <NumberSection>
      <Number>{number}</Number>
    </NumberSection>
    <Section>
      <BoldText size={2}>{name}</BoldText>
      <Text>{location}</Text>
      <Anchor href={`https://maps.google.com/?q=${mapLocation}`} target="_blank">{"> View in Maps"}</Anchor>
    </Section>
  </Container>
)

export default Card
