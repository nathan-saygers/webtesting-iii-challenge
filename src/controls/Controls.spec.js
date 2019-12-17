import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';
import '@testing-library/jest-dom/extend-expect';


test('provide buttons to toggle the closed and locked states.', () => {
  const {getByText} = render(<Controls />); 
  getByText(/open\ gate|close\ gate/i);
  getByText(/unlock\ gate|lock\ gate/i)
})

it('buttons text changes to reflect the state the door will be in if clicked', () => {
  const {getByText} = render(<Controls />); 
  let openCloseBtn = getByText(/open\ gate|close\ gate/i);
  let lockUnlockBtn = getByText(/unlock\ gate|lock\ gate/i);
  fireEvent.click(openCloseBtn);
  fireEvent.click(lockUnlockBtn);
  expect(openCloseBtn.textContent).toBe('Close Gate');
  expect(lockUnlockBtn.textContent).toBe('Lock Gate');
})

it('the closed toggle button is disabled if the gate is locked', () => {
  const {getByText} = render(<Controls locked={true} />); 
  let openCloseBtn = getByText(/open\ gate|close\ gate/i);
  expect(openCloseBtn).toBeDisabled();
})

it('the locked toggle button is disabled if the gate is open', () => {
  const {getByText} = render(<Controls closed={false} />); 
  let lockUnlockBtn = getByText(/unlock\ gate|lock\ gate/i);
  expect(lockUnlockBtn).toBeDisabled();
})

