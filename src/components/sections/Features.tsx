import { FeatureElement } from '../basic/feature/FeatureElement';
import { Section } from '../basic/section/Section';

const Features = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8">
      <FeatureElement
        title="Market Rents"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M21 12h-4l-3 8-4-16-3 8H3" />
          </svg>
        }
      >
        Look up hyper-local, neighborhood-by-neighborhood market rental rates in your area, based on large and up-to-date datasets.
      </FeatureElement>
      <FeatureElement
        title="Gross Rent Multipliers"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M12 12v.01M19.071 4.929a4 10 45 00-9.9 4.243 4 10 45 00-4.242 9.9 4 10 45 009.9-4.244 4 10 45 004.242-9.9" />
            <path d="M4.929 4.929a10 4 45 004.243 9.9 10 4 45 009.9 4.242 10 4 45 00-4.244-9.9 10 4 45 00-9.9-4.242" />
          </svg>
        }
      >
        Gross rental multipliers are a common predictor of cash flow on rental real estate. Quickly check average gross rental multipliers by location.
      </FeatureElement>
      <FeatureElement
        title="Fair Market Rents"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        }
      >
        Look up "fair market rent" as official determined by the US Dept of Housing and Urban Development.
      </FeatureElement>
    </div>
  </Section>
);

export { Features };
