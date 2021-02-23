import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {RightSideMenu} from '../components/RightSideMenu'
import '@testing-library/jest-dom'

it('checkMenu Redner', () => {
  const {container} = render(<RightSideMenu />)
  const menu = container.querySelector('[class="SideMenu"]')
  expect(menu).toBeTruthy()
})

it('checkMenuAction Render', () => {
  const {container} = render(<RightSideMenu />)
  const action = container.querySelector('[data-id="SideMenu-action"]')
  expect(action).toBeTruthy()
})

describe('Check Click Will Open the Menu', () => {
  it('onClick', () => {
    const {container} = render(<RightSideMenu />)
    const action = container.querySelector('[data-id="SideMenu-action"]')
    expect(container.firstChild.firstChild).toHaveClass('closed')
    fireEvent.click(action)
    expect(container.firstChild.firstChild).toHaveClass('open')
  })
})
