import React, {useState} from 'react'
import './style.css'

export const SwitchButton = (props) => {
  const [checked, setChecked] = useState(props.value || false)
  const onClick = (e) => {
    const newValue = checked ? false : 'checked'
    setChecked((newValue === 'checked'))
    if (props.onChange) {
      props.onChange(newValue)
    } else {
      console.log('SwitchBtn Component: To update state from the parent pass an onChange function')
    }
  }
  return (
    <span id='SwitchButton' className={`SwitchButton ${checked ? 'checked' : null}`} onClick={(e) => onClick(e)} title='SwitchButton'>
      <span className='btnSlider round' />
    </span>
  )
}
