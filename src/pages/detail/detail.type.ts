import { FORM_COMMENT, FORM_RATING } from "@/constants"
import type { BookItemType } from "@/types"
import type { UseQueryResult } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import type { FieldError } from "react-hook-form"

/* -------------------[객체 타입]---------------------- */
export type BookDetailType = BookItemType & {
  subInfo: {
    itemPage: number
    originalTitle: string
    subTitle: string
  }
  reviews: Array<ReviewType>
}

export type ReviewType = {
  id: string
  email: string
  nickname: string
  profileUrl: string | null
  comment: string
  rating: number
}

export type ReviewFormType = {
  [FORM_RATING]?: number
  [FORM_COMMENT]: string
}
export type ErrorMsgPT = { errorField?: FieldError }

export type ReviewItemCardPT = {
  review: ReviewType
  isOwned: boolean
}

/* -------------------[호출 시그니처]---------------------- */
export type UseBookDetailFT = (input: {
  isbn13: string
}) => UseQueryResult<BookDetailType, Error>

export type GetBookDetailFT = (input: {
  isbn13: string
}) => Promise<BookDetailType | undefined>

export type GetBookDetailFromApiFT = (input: {
  isbn13: string
}) => Promise<BookDetailType | undefined>

export type BookDetailExtractorFT = (input: {
  responseData: BookDetailResponseType | undefined
}) => BookDetailType

export type BookDetailResponseType = {
  item: Array<BookDetailType>
}

export type ResponseConverterFT = (input: {
  response: AxiosResponse<any, any>
}) => BookDetailType | undefined

export type AddBookReviewsFT = (input: {
  bookDetail: BookDetailType
  review: ReviewType
}) => BookDetailType

export type PostReviewOnPeanutFT = (input: {
  isbn13: string
  bookDetail: BookDetailType
  review: ReviewType
}) => Promise<BookDetailType | undefined>

export type GetDiscountRateFT = ({
  standard,
  sale,
}: Record<"standard" | "sale", number>) => number
