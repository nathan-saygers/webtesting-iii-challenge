import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

test('displays Closed if the closed prop is true and Open if otherwise', () => {
  const {getByText} = render(<Display closed={true} />); 
  let openCloseDisp = getByText(/open|closed/i);
  expect(openCloseDisp.textContent).toBe('Closed');
})

it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
  const {getByText} = render(<Display locked={true} />); 
  let lockedUnlockedDisp = getByText(/unlocked|locked/i);
  expect(lockedUnlockedDisp.textContent).toBe('Locked');
})

it('when locked or closed use the red-led class', () => {
  const {getByText} = render(<Display locked={true} closed={true}/>); 
  let lockedUnlockedDisp = getByText(/unlocked|locked/i);
  let openCloseDisp = getByText(/open|closed/i);
  expect(lockedUnlockedDisp.className).toBe('led red-led');
  expect(openCloseDisp.className).toContain('red-led');
})

it('when unlocked or open use the green-led class', () => {
  const {getByText} = render(<Display locked={false} closed={false}/>); 
  let lockedUnlockedDisp = getByText(/unlocked|locked/i);
  let openCloseDisp = getByText(/open|closed/i);
  expect(lockedUnlockedDisp.className).toContain('green-led');
  expect(openCloseDisp.className).toContain('green-led');
})