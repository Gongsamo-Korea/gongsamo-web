import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Link from 'next/link';
import Image from 'next/image';
import EmailIcon from '@/components/ui/icons/EmailIcon';
import InstagramIcon from '@/components/ui/icons/InstagramIcon';
import KakaoIcon from '@/components/ui/icons/KakaoIcon';
import NewsLetterIcon from '@/components/ui/icons/NewsLetterIcon';
import CircleCheckIcon from '@/components/ui/icons/CircleCheckIcon';
import Typography34 from '@/components/ui/textStyles/Typography34';
import Typography20 from '@/components/ui/textStyles/Typography20';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography13 from '@/components/ui/textStyles/Typography13';
import { CONTACT } from '@/contents/contact';
import env from '@/config';

const Contact = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  const renderContactIcon = (icon: string) => {
    switch (icon) {
      case 'email':
        return <EmailIcon width={24} height={24} />;
      case 'kakao':
        return <KakaoIcon width={24} height={24} />;
      case 'instagram':
        return <InstagramIcon width={24} height={24} />;
      case 'newsletter':
        return <NewsLetterIcon width={24} height={24} />;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Typography34 text="문의하기" color={theme.colors.gray9} textAlign="center" />
        <Typography17
          text="공적인사적모임이 더 궁금하다면 아래의 채널로 연락해주세요."
          color={theme.colors.gray9}
          textAlign="center"
          marginTop="1.2rem"
        />
      </TitleWrapper>
      <ContactWrapper>
        <ProfileImageWrapper>
          <Image
            src="/images/gongsamo_logo_vertical.png"
            alt={'gongsamo logo image'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </ProfileImageWrapper>
        <ContactList>
          {CONTACT.map((contact, index) =>
            contact.id !== 'email' ? (
              <Link href={contact.link} target="_blank">
                <ContactItem key={index}>
                  {renderContactIcon(contact.id)}
                  <Typography20 text={contact.title} color={theme.colors.gray9} weight={400} />
                </ContactItem>
              </Link>
            ) : (
              <>
                <ContactItem key={index} onClick={() => handleCopy(contact.link)}>
                  {renderContactIcon(contact.id)}
                  <Typography20 text={contact.title} color={theme.colors.gray9} weight={400} />
                  {isEmailCopied && (
                    <EmailCopiedText>
                      <CircleCheckIcon width={16} height={16} color={theme.colors.green4} />
                      <Typography13 text="주소가 복사 되었어요!" color={theme.colors.green4} />
                    </EmailCopiedText>
                  )}
                </ContactItem>
              </>
            ),
          )}
          <OnAirGuideWrapper>
            <Typography17
              text="김칩 ON-AIR에 게시를 원하신다면 아래 링크를 이용해주세요."
              color={theme.colors.gray6}
            />
            <Link href={env.links.on_air} target="_blank">
              <LinkText color={theme.colors.blue4} text="김칩 ON-AIR 제보하기" />
            </Link>
          </OnAirGuideWrapper>
        </ContactList>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 14rem 14.4rem 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rem;
`;

const TitleWrapper = styled.div``;

const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 14rem;
`;

const ProfileImageWrapper = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  padding: 4rem;
  display: flex;
  align-items: center;
`;

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactItem = styled.li`
  display: flex;
  width: 100%;
  gap: 1.2rem;

  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 50px;
  cursor: pointer;
  position: relative;

  &:hover * {
    font-weight: 700;
  }
`;

const EmailCopiedText = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4rem;
  width: 100%;
  position: absolute;
  left: 24rem;
  * {
    font-weight: 400 !important;
  }
`;

const OnAirGuideWrapper = styled.div`
  margin: 1.6rem;
`;

const LinkText = styled(Typography17)`
  text-decoration: underline;
`;

export default Contact;
