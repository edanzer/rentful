import React, { ReactNode } from 'react';
import { Meta } from '../meta/Meta';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { AppConfig } from '../../../utils/AppConfig';

type ILayoutProps = {
  children?: ReactNode;
};

export const Layout = (props: ILayoutProps) => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}
