import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { /*useLoaderData,*/ useNavigate, useLocation } from 'react-router-dom';

import FeedItem from '@components/feed/FeedItem';
import TabBar from '@components/common/TabBar';

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 0;
    padding: 0;

    color: #333;

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.3125rem);
  padding: 1.5rem 1.31rem 5.3125rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const FeedPage = () => {
  // const { response } = useLoaderData();
  // console.log(response);

  const mockData = [
    {
      profile: {
        nickname: '이세민',
        accountId: '@devvra1n',
        image: '',
      },
      article: {
        id: 'devvra1n',
        year: 2023,
        term: 1,
        preview:
          '야~~~~~~~~~~~개짖는소리좀안나게해라 으으아악 야~~~!!~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라야~~~~~~~~~~~개짖는소리좀안나게해라',
        image: '',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
    {
      profile: {
        nickname: '최어진',
        accountId: '@poodlepoodle',
        image: 'String',
      },
      article: {
        id: 'poodlepoodle',
        year: 2023,
        term: 1,
        preview:
          '하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 하..세민아제대로좀하렴 ',
        image: 'String',
      },
    },
  ];

  return (
    <>
      <Top>
        <h1>친구들의 24절기</h1>
        <Link to={`/feed/friends-list`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.935 13.8077C15.2091 13.8077 14.5914 13.5536 14.0818 13.0455C13.5722 12.5374 13.3174 11.9204 13.3174 11.1946C13.3174 10.4687 13.5714 9.85097 14.0795 9.34135C14.5876 8.83175 15.2046 8.57695 15.9305 8.57695C16.6563 8.57695 17.2741 8.831 17.7837 9.3391C18.2933 9.8472 18.5481 10.4642 18.5481 11.19C18.5481 11.9159 18.294 12.5336 17.7859 13.0433C17.2778 13.5529 16.6608 13.8077 15.935 13.8077ZM10.3174 19.423V17.9077C10.3174 17.6238 10.3863 17.3535 10.5241 17.0967C10.6619 16.8399 10.852 16.6359 11.0943 16.4846C11.8186 16.0603 12.5831 15.7388 13.3876 15.5202C14.1922 15.3016 15.0405 15.1923 15.9327 15.1923C16.8249 15.1923 17.6733 15.3016 18.4778 15.5202C19.2824 15.7388 20.0468 16.0603 20.7712 16.4846C21.0135 16.6359 21.2035 16.8399 21.3414 17.0967C21.4792 17.3535 21.5481 17.6238 21.5481 17.9077V19.423H10.3174ZM11.9096 17.7692V17.923H19.9558V17.7692C19.334 17.4166 18.6837 17.149 18.0048 16.9663C17.326 16.7836 16.6353 16.6923 15.9327 16.6923C15.2302 16.6923 14.5395 16.7836 13.8606 16.9663C13.1818 17.149 12.5314 17.4166 11.9096 17.7692ZM15.9327 12.3077C16.2417 12.3077 16.5048 12.199 16.7222 11.9817C16.9395 11.7644 17.0481 11.5013 17.0481 11.1923C17.0481 10.8833 16.9395 10.6202 16.7222 10.4029C16.5048 10.1856 16.2417 10.0769 15.9327 10.0769C15.6237 10.0769 15.3606 10.1856 15.1433 10.4029C14.926 10.6202 14.8173 10.8833 14.8173 11.1923C14.8173 11.5013 14.926 11.7644 15.1433 11.9817C15.3606 12.199 15.6237 12.3077 15.9327 12.3077ZM3.44238 13.75V12.25H10.9423V13.75H3.44238ZM3.44238 5.74995V4.25H14.9423V5.74995H3.44238ZM11.3981 9.74995H3.44238V8.25H12.1347C11.959 8.46922 11.8116 8.70223 11.6924 8.94903C11.5731 9.19581 11.475 9.46278 11.3981 9.74995Z"
              fill="black"
            />
          </svg>
        </Link>
      </Top>

      <ContentArea>
        {mockData.map((data, id) => (
          <FeedItem key={id} data={data} />
        ))}
      </ContentArea>

      <TabBar />
    </>
  );
};

export default FeedPage;
