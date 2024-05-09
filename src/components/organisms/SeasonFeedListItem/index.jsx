import * as S from './style';

import Text from '@components/atoms/Text';
import FeedListItemBody from '@components/molecules/FeedListItemBody';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function SeasonFeedListItem({
  articleId,
  term,
  year,
  image,
  preview,
}) {
  return (
    <S.Layout to={`/article/${articleId}`}>
      <S.InfoContainer>
        <section>
          <Text notoserif size="1.625" weight="700">
            {TermsToChinese[term]}
          </Text>
          <Text
            notoserif
            size="0.75"
            color="#bfbfbf"
            style={{ paddingBottom: '0.25rem' }}
          >
            {TermsToKorean[term]}
          </Text>
        </section>

        <Text
          notoserif
          size="0.75"
          color="#bfbfbf"
          style={{ paddingBottom: '0.25rem' }}
        >
          {year}년
        </Text>
      </S.InfoContainer>

      <FeedListItemBody image={image} preview={preview} />
    </S.Layout>
  );
}
