import React from 'react'

import clsx from 'clsx'
import Input from '@material-ui/core/Input'
import Container from '@material-ui/core/Container'

import useStyles from './styles'

function Form({ className, ...props }) {
  const classes = useStyles()

  return (
    <Container {...props} className={clsx(classes.root, className)}>
      <Input className={classes.root}></Input>
      <Input className={classes.root}></Input>
    </Container >
  )

}

export default Form
