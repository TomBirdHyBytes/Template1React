import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
jest.mock('react-owl-carousel')

test('App page renders', () => {
  render(<App />);
});

test('Nav bar renders', () => {
  render(<Navbar />);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});

test('Header renders', () => {
  render(<Header />);
  const textElement = screen.getByText("Call : +01 123455678990");
  expect(textElement).toBeInTheDocument();
});

test('Footer renders', () => {
  render(<Footer />);
  const textElement = screen.getByText("Get In Touch");
  expect(textElement).toBeInTheDocument();
});

test('Nav bar chooses selected class', () => {
  render(<Navbar selected="Home"/>)
  const selectedElement = screen.getByText("Home");
  const selectedClass = selectedElement.className;
  expect(selectedClass).toBe('Nav-Link-Selected');
})

test('Nav bar chooses non selected class', () => {
  render(<Navbar selected="About"/>)
  const nonSelectedElement = screen.getByText("Home");
  const nonSelectedClass = nonSelectedElement.className;
  const selectedElement = screen.getByText("About");
  const selectedClass = selectedElement.className;
  expect(nonSelectedClass).not.toBe('Nav-Link-Selected');
  expect(selectedClass).toBe('Nav-Link-Selected');
})