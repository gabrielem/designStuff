import React from 'react'
import { storiesOf } from '@storybook/react'

import { RightSideMenu } from '../components/RightSideMenu'

const stories = storiesOf('App RightSideMenu', module)

stories.add('RightSideMenu', () => {
  return (
    <div style={{height: '100%', background: '#000000'}}>
      <RightSideMenu>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
      </RightSideMenu>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
    </div>
  )
})
