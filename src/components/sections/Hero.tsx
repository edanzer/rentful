import Link from 'next/link';
import React from 'react';

import { Background } from '../basic/background/Background';
import { Button } from '../basic/button/Button';
import { HeroOneButton } from '../basic/hero/HeroOneButton';
import { Section } from '../basic/section/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Your hub for up-to-date\n'}
            <span className="text-primary-500">real estate investment data.</span>
          </>
        }
        description="Easily check local market rental rates, gross multipliers, and more."
        button={
          <Link href="/">
            <a>
              <Button xl>Sign Up for Free</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
