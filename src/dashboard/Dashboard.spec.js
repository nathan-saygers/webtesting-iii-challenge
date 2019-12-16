import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';

test('On render, gate is unlocked and open', () => {
  const {getByText} = render(<Dashboard />); 
  getByText(/unlocked/i);
  getByText(/open/i);
  // let lockerBtn = 
  // console.log('locker button', lockerBtn);
  // expect(lockerBtn).toHaveClass('green-led');
})

it('elements on Dashboard render', () => {
  const {getByText} = render(<Dashboard />); 
  getByText(/open\ gate|close\ gate/i);
  getByText(/unlock\ gate|lock\ gate/i)
})

it('cannot be closed or opened if it is locked', () => {
  const {getByText} = render(<Dashboard />);
  let openCloseBtn = getByText(/open\ gate|close\ gate/i);
  let lockUnlockBtn = getByText(/unlock\ gate|lock\ gate/i);
  fireEvent.click(openCloseBtn);
  fireEvent.click(lockUnlockBtn);
  fireEvent.click(openCloseBtn);
  console.log('Has Open Close button resolved', openCloseBtn)
  expect(openCloseBtn.textContent).toBe('Open Gate');
});