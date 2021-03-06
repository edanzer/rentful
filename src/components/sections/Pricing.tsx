import Link from 'next/link';

import { Button } from '../basic/button/Button';
import { Section } from '../basic/section/Section';
import { PricingCard } from '../basic/pricing/PricingCard';
import { PricingFeature } from '../basic/pricing/PricingFeature';

const Pricing = () => (
  <Section title="Flexible Plans" subtitle="Pricing">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <PricingCard
        name="FREE"
        price="$0 / mo"
        description="Best for individuals"
        button={
          <Link href="/">
            <a>
              <Button full secondary>
                Get Started
              </Button>
            </a>
          </Link>
        }
      >
        <PricingFeature text="1 Team Members" />
        <PricingFeature text="1 Website" />
        <PricingFeature text="1 GB Storage" />
        <PricingFeature text="1 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="PREMIUM"
        price="$19 / mo"
        description="Best for small teams"
        popular
        button={
          <Link href="/">
            <a>
              <Button full>Get Started</Button>
            </a>
          </Link>
        }
      >
        <PricingFeature text="5 Team Members" />
        <PricingFeature text="5 Website" />
        <PricingFeature text="5 GB Storage" />
        <PricingFeature text="5 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="ENTERPRISE"
        price="$99 / mo"
        description="Best for industry leader"
        button={
          <Link href="/">
            <a>
              <Button full secondary>
                Get Started
              </Button>
            </a>
          </Link>
        }
      >
        <PricingFeature text="30 Team Members" />
        <PricingFeature text="30 Website" />
        <PricingFeature text="30 GB Storage" />
        <PricingFeature text="30 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
    </div>
  </Section>
);

export { Pricing };
