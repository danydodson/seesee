import React from 'react'


import Typography from '@material-ui/core/Typography'

import Meta from 'components/Meta'
import Form from '../../components/Form/index.js'

import useStyles from './styles'

function SignInPage() {
  const classes = useStyles()

  return (
    <>
      <Meta
        title="Signin"
        description="User signin route"
      />

      <Typography variant="h3">Signin</Typography>

      <Form className={classes.root} />

    </>
  )
}

export default SignInPage
