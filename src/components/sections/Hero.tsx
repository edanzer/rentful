import Link from 'next/link';

import { Background } from '../basic/background/Background';
import { Button } from '../basic/button/Button';
import { HeroOneButton } from '../basic/hero/HeroOneButton';
import { Section } from '../basic/section/Section';
import { NavbarTwoColumns } from '../partials/navigation/NavbarTwoColumns';
import { Logo } from '../partials/logo/Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/local-rent-data">
            <a>Local Rent Data</a>
          </Link>
        </li>
        <li>
          <Link href="/gross-rent-multipliers">
            <a>Gross Rent Multipliers</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <a>
              <Button>Create Account</Button>
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

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