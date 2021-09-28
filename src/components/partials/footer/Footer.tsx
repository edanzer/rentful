import Link from 'next/link';

import { Background } from '../../basic/background/Background';
import { FooterCompanyInfo } from './FooterCompanyInfo';
import { FooterLinks } from './FooterLinks';
import { FooterTwoRowsCopyright } from './FooterTwoRowsCopyright';
import { Section } from '../../basic/section/Section';
import { AppConfig } from '../../../utils/AppConfig';
import { Logo } from '../header/Logo';

const Footer = () => (
  <Background color="bg-gray-100 mt-12">
    <Section>
      <FooterTwoRowsCopyright siteName={AppConfig.site_name}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <FooterCompanyInfo
              logo={<Logo />}
              description={AppConfig.description}
            />
          </div>
          <FooterLinks title="">
          </FooterLinks>
          <FooterLinks title="Resources">
            <li>
              <Link href="/local-rent-data">
                <a>Local Market Rents</a>
              </Link>
            </li>
            <li>
              <Link href="/gross-rent-multipliers">
                <a>Gross Rental Multipliers</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.huduser.gov/portal/datasets/fmr.html">
                <a>Fair Market Rents</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Data + Methods">
            <li>
              <Link href="https://www.zillow.com/research/data/">
                <a>Zillow Data</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.rentometer.com/rentometer-api-release-notes">
                <a>Rentometer API</a>
              </Link>
            </li>
            <li>
              <Link href="/methodology">
                <a>Methodology</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Other">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </FooterLinks>
        </div>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
);

export { Footer };
