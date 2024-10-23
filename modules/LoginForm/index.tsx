import { useRouter } from "next/navigation"
import { setCookie } from "cookies-next"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLocale } from "@/hooks/useLocale"
import type { LoginInputs, LoginStatus } from "@/types/userTypes"
import { useYUPConfig } from "./YUPchema"
import styles from "./LoginForm.module.css"

export const LoginForm = () => {
  const router = useRouter()
  const i18n = useLocale()
  const schema = useYUPConfig()
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  })

  const setCorrectData = () => {
    setValue("email", "tracey.ramos@reqres.in")
    setValue("password", "Charles123123")
  }

  const sendRequest: SubmitHandler<LoginInputs> = (data) => {
    axios
      .post("https://reqres.in/api/register", data)
      .then((response) => response.data as LoginStatus)
      .then((res) => {
        if (res.id) {
          setCookie("userId", res.id)
          router.push("/profile")
        } else {
          setError("root.loginForm", {
            type: "custom",
            message: res.error || "Something went wrong!",
          })
        }
      })
      .catch((err) =>
        setError("root.loginForm", {
          type: "custom",
          message: err.response?.data.error || err.message || "Server Error",
        }),
      )
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(sendRequest)}>
      {errors.root?.loginForm && (
        <p className={styles.formError}>{errors.root?.loginForm.message}</p>
      )}
      <div className={styles.inputField}>
        <label htmlFor="email">{i18n.loginInput}</label>
        <input type="text" id="email" {...register("email")} />
        <p className={styles.fieldError}>{errors.email?.message}</p>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="password">{i18n.passwordInput}</label>
        <input type="password" id="password" {...register("password")} />
        <p className={styles.fieldError}>{errors.password?.message}</p>
      </div>
      <button className="btn" type="button" onClick={setCorrectData}>
        {i18n.loginCorrectData}
      </button>
      <input className="btn" type="submit" value={i18n.loginButton} />
    </form>
  )
}
