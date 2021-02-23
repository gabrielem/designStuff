import * as React from 'react'
import { render } from '@testing-library/react'
import {SwitchButton} from '../components/SwitchButton'
import '@testing-library/jest-dom'

it('checkSwitchButton Render', () => {
  const {container} = render(<SwitchButton />)
  const menu = container.querySelector('[id="SwitchButton"]')
  expect(menu).toBeTruthy()
})
