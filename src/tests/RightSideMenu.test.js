import * as React from 'react'
import { render } from '@testing-library/react'
import {RightSideMenu} from '../components/RightSideMenu'
import '@testing-library/jest-dom'

it('checkMenu Redner', () => {
  const {container} = render(<RightSideMenu />)
  const menu = container.querySelector('[class="SideMenu"]')
  expect(menu).toBeTruthy()
})
