import { ALADIN_POINT_BOOK_LIST } from "@/constants"
import { aladinAxiosInstance } from "@/libs/axios"
import type { GetBookListFT } from "./home.type"

export const getBookList: GetBookListFT = async ({ page }) => {
  try {
    const response = await aladinAxiosInstance().get(ALADIN_POINT_BOOK_LIST, {
      params: {
        start: page,
        QueryType: "ItemNewAll",
      },
    })
    return response.data
  } catch (e) {
    throw new Error("책 리스트를 불러오지 못했습니다.")
  }
}
