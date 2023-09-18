'use client';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

type RecoilProviderProps = PropsWithChildren<{}>;

export const RecoilProvider = ({ children }: RecoilProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
