import React from 'react';
import { render, screen } from '@testing-library/react';
import ModeDisplay from './';

test('Текст присуствует "Угадаю"', () => {
  render(<ModeDisplay />);
  const linkElement = screen.getByText(/Угадаю/i);
  expect(linkElement).toBeInTheDocument();
});

test('Текст присутствует "Загадываю"', () => {
  render(<ModeDisplay />);
  const linkElement = screen.getByText(/Загадываю/i);
  expect(linkElement).toBeInTheDocument();
});