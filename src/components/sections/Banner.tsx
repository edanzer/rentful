import Link from 'next/link';

import { Button } from '../basic/button/Button';
import { CTABanner } from '../basic/cta/CTABanner';
import { Section } from '../basic/section/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
