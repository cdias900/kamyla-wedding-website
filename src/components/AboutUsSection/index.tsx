import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { AboutUsContainer, AboutUsText } from './styles';

const AboutUsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <AboutUsContainer ref={ref}>
      <Subtitle>{t('subtitle.couple')}</Subtitle>
      <Title>{t('title.aboutUs')}</Title>
      <AboutUsText>{t('text.aboutUs')}</AboutUsText>
    </AboutUsContainer>
  );
});

export { AboutUsSection };
