import React from 'react'
import { storiesOf } from '@storybook/react'

import { BgFade } from '../components/BgFade'

const stories = storiesOf('App BgFade', module)

stories.add('BgFade', () => {
  return (
    <BgFade>
      <div style={{height: '100%'}}>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
      </div>
    </BgFade>
  )
})
