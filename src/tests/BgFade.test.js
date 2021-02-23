import * as React from 'react'
import { render } from '@testing-library/react'
import {BgFade} from '../components/BgFade'
import '@testing-library/jest-dom'

it('checkMenu', () => {
  const {container} = render(<BgFade />)
  const menu = container.querySelector('[class="_BgFade_"]')
  expect(menu).toBeTruthy()
})
