import { FORM_EMAIL, FORM_PW, FORM_PW_CONFIRM } from "@/constants"
import type { UserType } from "@/types"
import { AxiosResponse } from "axios"

export type SignInDataType = Record<"userId" | "password", string>
export type SignInDataReturnType = {
  info: object
  token: string
  userId: string
}
export type PostUserSignInFT = (input: SignFormType) => Promise<UserType>

export type ConvertSignResToUserFT = (input: {
  response: AxiosResponse
}) => UserType

export type PostSignUpFT = (input: SignFormType) => Promise<UserType>

export type GenerateNewUserDataFT = (input: {
  email: string
  password: string
  nickName: string
}) => SignUpRequestType

export type GenerateTempNicknameByEmailFT = (input: { email: string }) => string

export type GetRefreshTokenFT = () => Promise<string>

export type SignUpRequestType = {
  userId: string
  password: string
  data: {
    nickName: string
  }
}

export type SignFormType = {
  [FORM_EMAIL]: string
  [FORM_PW]: string
}

export type SignUpFormType = SignFormType & {
  [FORM_PW_CONFIRM]: string
}

export type SignInReqBodyType = {
  userId: string
  password: string
}

export type CreateSignInReqBodyFT = (input: SignFormType) => SignInReqBodyType

export type OnSubmitFormFT = (input: SignFormType) => void
