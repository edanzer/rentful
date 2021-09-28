import Link from 'next/link';

import { Section } from '../../basic/section/Section';
import { Logo } from './Logo';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { Button } from '../../basic/button/Button';
import { Background } from '../../basic/background/Background';

export const Header = () => {
  return (
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
    </Background>
    
  )
}
