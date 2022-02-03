import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NSAVDEX',
  description:
    'The best AMM on Binance! Earn NSBC through yield farming, staking or win the lottery and prediction. Join the referral program. NFT is coming soon...',
  image: 'https://nsavdex.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Super Floki')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Super Floki')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Super Floki')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Super Floki')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Super Floki')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Super Floki')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Super Floki')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Super Floki')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Super Floki')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Super Floki')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Super Floki')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Super Floki')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Super Floki')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Super Floki')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Super Floki')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Super Floki')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Super Floki')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Super Floki')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Super Floki')}`,
      }
    default:
      return null
  }
}
