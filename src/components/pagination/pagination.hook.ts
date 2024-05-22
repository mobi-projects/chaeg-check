import { useSearchParams } from "react-router-dom"

import type { ChangeParamsValueFT, GetParamValue } from "./pagination.type"
import { CURRENT_PAGE, ITEM_PERPAGE, ITEM_TOTAL } from "@/constants"
import { isNull } from "@/funcs"

export const useHandleUrlParams = () => {
  const [urlParams, setUrlParams] = useSearchParams()
  /**
   * @param urlkey - 주소의 어떤값을 변경할건지 입력받습니다.
   * @param value - 해당 url의 바꿀 값을 입력합니다
   * @description - 주소의 key값과 key에맞는 새로 바꿀 value값을 받아서 주소값을 설정하는 함수입니다.
   */
  const changeParamValue: ChangeParamsValueFT = ({ urlKey, value }) => {
    urlParams.set(urlKey, value)
    setUrlParams(urlParams)
  }
  /**
   * @param urlkey - 주소의 어떤값을 변경할건지 입력받습니다.
   * @description - 입력된 key값에 맞는 value가있다면 그값을 , 없다면 빈 문자열을 반환합니다.
   */
  const getParamValue: GetParamValue = ({ urlKey }) => {
    let param = urlParams.get(urlKey)
    if (isNull(param) && urlKey === CURRENT_PAGE) return "1"
    if (isNull(param)) return ""
    return param
  }
  return { changeParamValue, getParamValue }
}

export const usePagination = () => {
  const { getParamValue } = useHandleUrlParams()
  const page = +getParamValue({ urlKey: CURRENT_PAGE })
  const defaultBtnLength = 5
  const totalPage = Math.ceil(ITEM_TOTAL / ITEM_PERPAGE)
  const startNum =
    Math.floor((page - 1) / defaultBtnLength) * defaultBtnLength + 1
  const endNum = Math.min(startNum + defaultBtnLength - 1, totalPage)
  const buttonLength = endNum - startNum + 1

  return { page, buttonLength, totalPage, startNum, endNum }
}
