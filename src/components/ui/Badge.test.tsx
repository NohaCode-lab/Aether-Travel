import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Badge>Primary</Badge>);
    const badgeElement = screen.getByText('Primary');
    expect(badgeElement).toHaveClass('bg-indigo-100 text-indigo-800');
  });

  it('applies secondary variant styles when variant is "secondary"', () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badgeElement = screen.getByText('Secondary');
    expect(badgeElement).toHaveClass('bg-gray-100 text-gray-800');
  });

  it('applies success variant styles when variant is "success"', () => {
    render(<Badge variant="success">Success</Badge>);
    const badgeElement = screen.getByText('Success');
    expect(badgeElement).toHaveClass('bg-green-100 text-green-800');
  });

  it('applies danger variant styles when variant is "danger"', () => {
    render(<Badge variant="danger">Danger</Badge>);
    const badgeElement = screen.getByText('Danger');
    expect(badgeElement).toHaveClass('bg-red-100 text-red-800');
  });

  it('includes base styles on all variants', () => {
    render(<Badge>Base Styles</Badge>);
    expect(screen.getByText('Base Styles')).toHaveClass(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
    );
  });
});
