import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { setCookie } from "cookies-next"
import { useForm, SubmitHandler } from "react-hook-form"
import { useLocale } from "@/hooks/useLocale"
import type { LoginInputs, LoginStatus } from "@/types/userTypes"
import styles from "./LoginForm.module.css"

export const LoginForm = () => {
  const router = useRouter()
  const i18n = useLocale()
  const { register, handleSubmit, setValue } = useForm<LoginInputs>({})
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({})

  useEffect(() => {
    if (loginStatus.id) {
      setCookie("userId", loginStatus.id)
      router.push("/profile")
    }
  }, [loginStatus])

  const setCorrectData = () => {
    setValue("email", "tracey.ramos@reqres.in")
    setValue("password", "Charles123123")
  }

  const sendRequest: SubmitHandler<LoginInputs> = (data) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }

    // согласно api регистрация пройдет только у заранее определенных пользователей из списка
    fetch("https://reqres.in/api/register", options)
      .then((response) => response.json())
      .then((res) => {
        setLoginStatus(res)
      })
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(sendRequest)}>
      {loginStatus.error && <span className={styles.formError}>{loginStatus.error}</span>}
      <label htmlFor="email">{i18n.loginInput}</label>
      <input type="text" id="email" {...register("email")} />
      <label htmlFor="password">{i18n.passwordInput}</label>
      <input type="password" id="password" {...register("password")} />
      <input className="btn" type="button" value={i18n.loginCorrectData} onClick={setCorrectData} />
      <input className="btn" type="submit" value={i18n.loginButton} />
    </form>
  )
}
