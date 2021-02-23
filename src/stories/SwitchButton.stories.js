import React from 'react'
import { storiesOf } from '@storybook/react'

import { SwitchButton } from '../components/SwitchButton'

const stories = storiesOf('App SwitchButton', module)

stories.add('SwitchButton', () => {
  return <SwitchButton />
})
