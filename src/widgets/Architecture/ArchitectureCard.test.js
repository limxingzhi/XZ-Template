import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArchitectureCard from './ArchitectureCard';

describe('Testing Architecture Card Widget', () => {
  it('Snapshot Matches', () => {
    const { container } = render(<ArchitectureCard />);
    expect(container).toMatchSnapshot();
  });
});

