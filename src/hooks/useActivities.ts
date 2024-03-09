import { useTranslation } from 'react-i18next';

export const useActivities = (title: string | undefined) => {
  switch (title) {
    case 'codeVally':
      return useTranslation('codeVally');
    case 'codeVally':
      return useTranslation('mediaTracks');
    case 'mediaTracks':
      return useTranslation('camps');
    case 'kid':
      return useTranslation('kids');
    case 'lecture':
      return useTranslation('lectures');
    default:
      break;
  }
};
