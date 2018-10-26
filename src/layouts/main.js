import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Center } from '../components'
import colors from '../colors'

const Container = styled.div`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backgroundAlt};

  align-items: flex-start;

  h1 {
    color: ${colors.background}
    text-align: left;
  }

  h2 {
    color: ${colors.accent || 'gray'};
    font-weight: 400;
    text-align: left;
  }
`

const CenteredHalf = styled(Center)`
  flex-direction: column;
  height: 50vh;

  padding-left: 15vw;
`

const ColoredBg = styled.div`
  width: 100vw;
  height: 50vh;
  color: ${colors.primary};
  background-color: ${colors.background};
`

export default function Main({ children }) {
  return (
    <Container>
      <CenteredHalf>{children}</CenteredHalf>
      <ColoredBg />
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
