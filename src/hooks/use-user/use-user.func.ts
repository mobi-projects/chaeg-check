import { API_GET_USER } from "@/constants"
import { baseAxiosInstance } from "@/libs/axios"
import { ConvertAxiosResFT, UserType } from "@/types"

/**
 * 메인서버에 저장된 유저정보를 가져옵니다.
 */
export const getUserFromPeanut = async () => {
  const response = await baseAxiosInstance.patch(API_GET_USER)
  console.log(response)
  const user = convertGetUserResToUser({ response })
  return user
}
/**
 * getUserFromPeanut() 중, axios 응답에 대해 User 데이터로 변환합니다.
 */
const convertGetUserResToUser: ConvertAxiosResFT<UserType> = ({ response }) => {
  const email = response.data.userId
  const profileUrl = response.data.profileUrl
  const nickname = response.data.data.nickname
  const user: UserType = {
    email,
    profileUrl,
    nickname,
  }
  return user
}
