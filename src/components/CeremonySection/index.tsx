import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { CeremonyContainer, CeremonyText } from './styles';

const CeremonySection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <CeremonyContainer ref={ref}>
      <Subtitle>{t('subtitle.wedding')}</Subtitle>
      <Title>{t('title.ceremony')}</Title>
      <CeremonyText>{t('text.ceremony')}</CeremonyText>
    </CeremonyContainer>
  );
});

export { CeremonySection };
