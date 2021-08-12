import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

test('renders primary and test with Snap', () => {
  render(<Button label="Primary Button" />)
  const button = document.querySelector('.sg.contacto-button')
  console.log(window.getComputedStyle(button))
  // expect(container).toMatchSnapshot()
})

// test('renders secondary button with default args', () => {
//   render(<Button label="Secondary Button" type="secondary" />)
//   const buttonElement = screen.getByText('Secondary Button')
//   expect(buttonElement).not.toBeNull()
//   expect(buttonElement).toMatchSnapshot()
// })
