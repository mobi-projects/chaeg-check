import { LogOut, User, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { PATH_HOME, PATH_MY, PATH_SIGN } from "@/constants"
import { postUserSignOut } from "@/pages/sign/sign.func"

export const Header = () => {
  const navigate = useNavigate()
  const BUTTON_VARIANT = "ghost"
  const BUTTON_STYLE =
    "IPHON_XR:max-w-full flex h-full w-full max-w-[10rem] items-center justify-evenly border-none p-0"
  return (
    <div className=" flex h-[6rem] w-full flex-col justify-center border-b-2">
      <div className="flex h-1/2 w-full items-center justify-center font-extrabold">
        Chaeg Check
      </div>
      <div className="IPHON_XR:justify-evenly flex h-1/2 w-full justify-end">
        <Button
          variant={BUTTON_VARIANT}
          className={BUTTON_STYLE}
          onClick={() => navigate(PATH_HOME)}
        >
          <Home />
          Home
        </Button>
        <Button
          variant={BUTTON_VARIANT}
          className={BUTTON_STYLE}
          onClick={() => navigate(PATH_MY)}
        >
          <User />
          MyPage
        </Button>
        <Button
          variant={BUTTON_VARIANT}
          className={BUTTON_STYLE}
          onClick={async () => {
            const result = await postUserSignOut()
            if (result) return navigate(PATH_SIGN)
            alert("로그아웃 실패")
          }}
        >
          <LogOut />
          LogOut
        </Button>
      </div>
    </div>
  )
}
