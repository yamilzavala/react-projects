import './indexReviews.css'
import data from './data'
import {useState} from 'react';
import Review from './components/Review';

const AppReviews = () => {
  const [index, setIndex] = useState(0)
  const [reviews, setReviews] = useState(data)
  const [reviewSelected, setReviewSelected] = useState(reviews[index])

  const checkNum = (idx) => {
    if(idx > reviews.length -1) {
      console.log(0)
      return 0
    }
    if(idx < 0) {
      return reviews.length -1
    }
    return idx
  }

  const goNext = () => {
    setIndex((prevIdx) => {
      const nexIdx = prevIdx + 1;
      return checkNum(nexIdx)
    })
    setReviewSelected(reviews[index])
  }

  const goPrev = () => {
    setIndex((prevIdx) => {
      const nexIdx = prevIdx - 1;
      return checkNum(nexIdx)
    })
    setReviewSelected(reviews[index])
  }

  const supriseMe = () =>  {
    setIndex((prevIdx) => {
      let randomIdx = Math.floor(Math.random()*reviews.length);
      if(prevIdx === randomIdx) {
        randomIdx = randomIdx + 1;
      }
      return checkNum(randomIdx)
    })
    setReviewSelected(reviews[index])
  }

  return (
    <main>
      <Review key={reviewSelected.id} {...reviewSelected} goNext={goNext} goPrev={goPrev} supriseMe={supriseMe}/>
    </main>
  )
};
export default AppReviews;
