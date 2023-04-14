import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { MapView, PartyContainer, PartyText } from './styles';

const PartySection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <PartyContainer ref={ref}>
      <Subtitle>{t('subtitle.party')}</Subtitle>
      <Title>{t('title.party')}</Title>
      <PartyText>{t('text.party')}</PartyText>
      <MapView title={t('text.party')} />
    </PartyContainer>
  );
});

export { PartySection };
