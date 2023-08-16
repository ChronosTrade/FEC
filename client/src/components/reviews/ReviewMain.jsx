import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import { StyledButton, GlobalStyles, ReviewWrapper } from './styles';
import ReviewCard from './ReviewCard';

import RatingSummary from './RatingSummary';
import Dropdown from './Dropdown';
import WriteReview from './WriteReview';
const reviewMeta = {
  product_id: '40350',
  ratings: {
    1: '8',
    2: '7',
    3: '17',
    4: '32',
    5: '34',
  },
  recommended: {
    false: '29',
    true: '69',
  },
  characteristics: {
    Size: {
      id: 135240,
      value: '2.8155339805825243',
    },
    Width: {
      id: 135241,
      value: '2.8543689320388350',
    },
    Comfort: {
      id: 135242,
      value: '3.1359223300970874',
    },
    Quality: {
      id: 135243,
      value: '3.3431372549019608',
    },
  },
};

const reviewList = {
  product: '40350',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 1275838,
      rating: 1,
      summary: 'gives you wings',
      recommend: true,
      response: null,
      body: 'these shoes are not only stylish but also comfortable. in fact, i sprouted 4 pairs of sentient wings that lifted me away.',
      date: '2022-07-22T00:00:00.000Z',
      reviewer_name: 'stuck in antarctica',
      helpfulness: 49,
      photos: [
        {
          id: 2455629,
          url: 'https://res.cloudinary.com/dky0ccpc4/image/upload/v1658460919/ropzkwtevo8ebw2m3swc.png',
        },
      ],
    },
    {
      review_id: 1277922,
      rating: 4,
      summary: 'In and out is the best',
      recommend: true,
      response: null,
      body: 'I dont care that they dont have other toppings. I jus like itttttt',
      date: '2022-12-13T00:00:00.000Z',
      reviewer_name: 'InandOutKing',
      helpfulness: 7,
      photos: [
        {
          id: 2456861,
          url: 'https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/menu/cheeseburger-meal.png?package=INNOUT',
        },
        {
          id: 2456862,
          url: 'https://s3-media0.fl.yelpcdn.com/bphoto/3d0jZA4RdxherdOABWGhWA/348s.jpg',
        },
      ],
    },
    {
      review_id: 1277920,
      rating: 5,
      summary: 'I like beans',
      recommend: true,
      response: null,
      body: 'Beans are great. Why? I dont know. They are a good source of protein. Damn.',
      date: '2022-12-13T00:00:00.000Z',
      reviewer_name: 'ThyBeans99',
      helpfulness: 1,
      photos: [
        {
          id: 2456858,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1atNyBQCe9UmCM-0yPIv6rVmBIt7pH1lSj9diSt208ZTuUWJJXd22haVF9AwUj9e-iC0&usqp=CAU',
        },
        {
          id: 2456859,
          url: 'https://www.jessicagavin.com/wp-content/uploads/2020/05/types-of-beans.jpg',
        },
        {
          id: 2456860,
          url: 'https://culinaryginger.com/wp-content/uploads/British-Baked-Beans-27-720x540.jpg',
        },
      ],
    },
    {
      review_id: 1277923,
      rating: 4,
      summary: 'In and Out is OP',
      recommend: true,
      response: null,
      body: 'Like i said. In and out is the best. SO be quiet please. sorry did not mean to be rude',
      date: '2022-12-13T00:00:00.000Z',
      reviewer_name: 'inandoutKing',
      helpfulness: 0,
      photos: [
        {
          id: 2456865,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/11/93/92/in-n-out-burger.jpg',
        },
        {
          id: 2456864,
          url: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/af/a6/0f/in-n-out.jpg',
        },
        {
          id: 2456866,
          url: 'https://restaurantclicks.com/wp-content/uploads/2022/02/In-N-Out-Burger.jpg',
        },
      ],
    },
    {
      review_id: 1278030,
      rating: 4,
      summary: 'I actually like them now',
      recommend: true,
      response: null,
      body: 'I gave them another chance after my last review, and I have really come to like them.',
      date: '2022-12-16T00:00:00.000Z',
      reviewer_name: 'Jack',
      helpfulness: 0,
      photos: [],
    },
  ],
};

const ReviewMain = () => {
  const [reviews, setReviews] = useState(reviewList.results);
  const { totalRatings, setTotalRatings } = useContext(AppContext);
  const [sortOrder, setSortOrder] = useState('relevant');

  const handleSortChange = (order) => {
    setSortOrder(order);
    let sortedReviews;

    switch (order) {
      case 'newest':
        sortedReviews = [...reviews].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      case 'helpful':
        sortedReviews = [...reviews].sort(
          (a, b) => b.helpfulness - a.helpfulness
        );
        break;
      default:
        sortedReviews = reviews;
    }

    setReviews(sortedReviews);
  };

  // Calculate the average rating based on the review meta
  const ratings = reviewMeta.ratings;
  const totalReviews = Object.values(ratings).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const averageRating =
    Object.keys(ratings).reduce(
      (acc, rating) => acc + rating * ratings[rating],
      0
    ) / totalReviews;

  return (
    <ReviewWrapper>
      <GlobalStyles />
      <RatingSummary
        ratings={reviewMeta.ratings}
        recommended={reviewMeta.recommended}
        characteristics={reviewMeta.characteristics}
      />
      Sort By
      <Dropdown style={''} onChange={handleSortChange} />
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
      <WriteReview />
    </ReviewWrapper>
  );
};

export default ReviewMain;
