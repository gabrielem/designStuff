import React from 'react';

import { BgFade } from '../components/BgFade'
import { bgImage } from './assets/bg.jpg'

export default {
  title: 'DesignStuff/BgFade',
  component: BgFade
}


export const BgFadeBasic = () => <BgFade><div style={{minHeight: '1000px'}} /></BgFade>;
export const BgFadeWithBgImage = () => <BgFade backgroundImage={bgImage}><div style={{minHeight: '1000px'}} /></BgFade>;

/*

const Template = (args) => <Page {...args} />

export const Default = Template.bind({})
LoggedIn.args = {}

export const CustomBackground = Template.bind({})
LoggedOut.args = { backgroundImage: bgImage }
*/
/*
import React from 'react'
import { storiesOf } from '@storybook/react'

import { BgFade } from '../components/BgFade'
import { bgImage } from './assets/bg.jpg'

const stories = storiesOf('App BgFade', module)

stories.add('BgFade', () => {
  return (
    <BgFade backgroundImage={bgImage}>
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
*/
