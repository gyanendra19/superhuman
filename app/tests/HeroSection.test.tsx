import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '@/components/HeroSection';

describe('HeroSection', () => {
    it('renders correctly with all content', () => {
        render(<HeroSection />);

        const region = screen.getByRole('region');
        expect(region).toBeInTheDocument();

        expect(
            screen.getByText(/introducing the next evolution of superhuman ai/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/save 4 hours per person every single week/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/superhuman is the most productive email app ever made/i)
        ).toBeInTheDocument();

        expect(screen.getByText(/get started/i)).toBeInTheDocument();
    });

    it('has the background gradient div', () => {
        render(<HeroSection />);
        const gradientDiv = screen.getByRole('region').querySelector('.bg-superhuman-gradient');
        expect(gradientDiv).toBeInTheDocument();
    });
});
