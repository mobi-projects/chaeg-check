import { isNull } from "@/funcs"
import { useUser } from "@/hooks"
import { FC } from "react"
import { NOT_RATE } from "../detail.constant"
import type { BookDetailType, ReviewType } from "../detail.type"

export const ReviewList = (data: BookDetailType) => {
  const { user } = useUser()
  const reviewCount = data.reviews.length

  return (
    <div className=" mb-10 mt-5 w-full border-t-2 py-2">
      <h1 className="w-full py-2 text-lg font-semibold text-slate-700">
        {`${reviewCount} 개의 후기`}
      </h1>
      {reviewCount === 0 ? (
        <NoReviewNotice />
      ) : (
        data.reviews.map((review, idx) => (
          <ReviewItemCard
            key={idx}
            review={review}
            isOwned={review.email === user?.email}
          />
        ))
      )}
    </div>
  )
}

const NoReviewNotice: FC = () => (
  <h1 className="flex w-full items-center justify-center py-2 font-bold">
    아직 리뷰가없어요! 소중한 리뷰를 달아주세요
  </h1>
)

type ReviewItemCardPT = {
  review: ReviewType
  isOwned: boolean
}

const ReviewItemCard: FC<ReviewItemCardPT> = ({ review, isOwned }) => {
  const comment = review.comment
  const profile = !isNull(review.profileUrl) ? review.profileUrl : ""
  const rating = review.rating
  const ratingNotice = rating !== NOT_RATE ? `${rating}/10` : "- / 10"

  return (
    <div className="grid w-full grid-cols-[4.5rem_1fr_2rem] border-y-2 border-slate-100 py-2">
      <div className="flex items-start py-2">
        <img src={profile} className="h-16 w-16 rounded-full " />
      </div>
      <div className="pl-2">
        <p className="pb-2 text-sm font-thin IPHON_XR:text-xs">
          {review.nickname}
        </p>
        <p className="IPHON_XR: h-8 text-sm">{comment}</p>
        <p className="IPHON_XR: text-xs font-thin text-gray-500">
          ⭐️ 별점: {ratingNotice}
        </p>
      </div>
      {isOwned && (
        <button className="flex w-8 items-center justify-center py-2">X</button>
      )}
    </div>
  )
}
