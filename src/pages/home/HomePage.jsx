import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import TopBar from '@components/common/TopBar';
import FortuneModal from '@components/home/FortuneModal';
import YearlyContent from '@components/home/YearlyContent';
import SeasonalContent from '@components/home/SeasonalContent';
import TabBar from '@components/common/TabBar';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Season = styled.div`
  position: relative;
  width: 100%;
  height: 3.5625rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 1.25rem;

  column-gap: 0.5rem;

  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #333;

  .season__title {
    font-family: 'Noto Serif KR';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .season__description {
    margin-bottom: 0.5rem;

    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: #000;
  }
`;

const FortuneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 0.2rem;

  width: 100%;
  height: 2.75rem;
`;

const Fortune = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21.875rem;
  height: 2rem;
  padding: 0 1rem;
  margin-bottom: 0.2rem;

  cursor: pointer;
  border-radius: 1.125rem 1rem 1rem 1.125rem;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);

  .fortune__title-container {
    height: 100%;

    display: flex;
    align-items: center;
    column-gap: 0.32rem;
  }

  .fortune__title {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding-bottom: 0.025rem;
  }

  .fortune__date {
    color: #bfbfbf;
    text-align: right;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Category = styled.div`
  position: relative;
  width: 100%;
  height: 4.4375rem;
  padding: 1.87rem 1.25rem 0.38rem;

  display: flex;
  justify-content: space-between;
  align-content: flex-end;

  background-color: #fff;
`;

const Year = styled.h1`
  position: relative;
  display: flex;

  color: #333;
  font-family: 'Noto Serif KR';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 134%;
`;

const Select = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  select {
    width: 5.7rem;
    height: 1.25rem;
    text-align: center;

    border: none;
    outline: none;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  /* IE */
  select::-ms-expand {
    display: none;
  }
`;

const ContentArea = styled.div`
  position: relative;
  overflow-y: auto;

  width: 100%;
  height: calc(100% - 2.5rem - 3.5625rem - 2.95rem - 4.4375rem);
  padding-bottom: 3.8125rem;
`;

const HomePage = () => {
  const { homeData, termData, newNotificationData } = useLoaderData();
  console.log(JSON.stringify(homeData, null, '\t'));

  const [now, setNow] = useState(new Date());

  // useEffect(() => {
  //   const Timer = setInterval(() => {
  //     setNow(new Date());
  //   }, 1000);
  //   console.log('mount!');

  //   return () => {
  //     clearInterval(Timer);
  //     console.log('unmount!');
  //   };
  // }, []);

  /* 운세 팝업 */
  const [fortuneText, setFortuneText] = useState('');

  useEffect(() => {
    const fetchTodayFortune = async () => {
      const accessToken = localStorage.getItem('accessToken');

      await axios({
        method: 'GET',
        url: `/api/today-fortune`,
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => {
        setFortuneText(res.data);
      });
    };
    fetchTodayFortune();
  }, []);

  const [showModal, setShowModal] = useState(false);

  /* 홈 */
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('year');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(`/home?category=${newCategory}`);
  };

  return (
    <Layout>
      {showModal && (
        <FortuneModal
          now={now}
          fortuneText={fortuneText}
          onCloseModal={() => {
            setShowModal(false);
          }}
        />
      )}

      <TopBar isNewNotification={newNotificationData} />

      <Season>
        <div className="season__title">
          {TermsToChinese[termData.currentTerm.sequence]}
        </div>
        <div className="season__description">
          {`${TermsToKorean[termData.currentTerm.sequence]}, ${
            termData.currentTerm.sequence
          }번째 절기`}
        </div>
      </Season>

      <FortuneContainer>
        <Fortune
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div className="fortune__title-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.4286 7.57067L10.4286 0.935057L3.79297 0.935059L3.79297 7.57067"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M10.2949 0.935059L1.61492 9.61506L4.99966 12.9998L9.33966 8.6598L10.4247 7.5748"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M4.16208 0.935083L12.8421 9.61508L9.45735 12.9998L7.28735 10.8298"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </svg>
            <div className="fortune__title">오늘의 운세</div>
          </div>
          <div className="fortune__date">{`${
            now.getMonth() + 1
          }월 ${now.getDate()}일`}</div>
        </Fortune>
      </FortuneContainer>

      <Category>
        <Year>
          {selectedCategory === 'year'
            ? now.getFullYear().toString()
            : undefined}
        </Year>
        <Select>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="year">연도별 보기</option>
            <option value="season">절기별 보기</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0005 14.6538L7.59668 10.25H16.4043L12.0005 14.6538Z"
              fill="black"
            />
          </svg>
        </Select>
      </Category>

      <ContentArea>
        {selectedCategory === 'year' && (
          <YearlyContent homeData={homeData} termData={termData} />
        )}
        {selectedCategory === 'season' && <SeasonalContent />}
      </ContentArea>

      <TabBar />
    </Layout>
  );
};

export default HomePage;
