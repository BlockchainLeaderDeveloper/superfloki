import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '/',
      },
      {
        label: t('Blog'),
        href: '/',
      },
      {
        label: t('Community'),
        href: '/',
      },
      {
        label: t('SLOKI token'),
        href: 'https://bscscan.com/address/0xf7bf4507336aea836ab5575ec1801d96c3059483',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '/',
      },
      {
        label: t('Guids & FAQ'),
        href: '/',
      },
      {
        label: t('Terms & Conditions'),
        href: '/termcondition',
      },
      {
        label: t('Disclaimer'),
        href: '/disclaimer',
      },
      {
        label: t('Privacy'),
        href: '/privacy',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com',
      },
      {
        label: t('Audits'),
        href: '/',
      },
    ],
  },
]
