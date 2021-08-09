import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MotivationCard from './MotivationCard';

describe('Testing Motivation Card Widget', () => {
  it('Snapshot Matches', () => {
    const { container } = render(<MotivationCard />);
    expect(container).toMatchSnapshot();
  });
});

