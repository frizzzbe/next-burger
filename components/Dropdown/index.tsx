import { useState, useRef, useEffect, useCallback } from "react"
import style from "./Dropdown.module.css"
import { CiUser } from "react-icons/ci"
import type { DropdownProps } from "./types"
import { useLocale } from "@/hooks/useLocale"

export const Dropdown = ({ children }: DropdownProps) => {
  const container = useRef<HTMLDivElement>()
  const i18n = useLocale()
  const [dropdownState, setDropdownState] = useState(false)

  const handleDropdownClick = () => setDropdownState(!dropdownState)
  const handleClickOutside = useCallback((e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [handleClickOutside])

  return (
    <div className={style.container} ref={container}>
      <button
        type="button"
        className={style.button}
        onClick={handleDropdownClick}
        aria-label={i18n.dropdownUser}
      >
        <CiUser />
      </button>
      {dropdownState && (
        <nav className={style.dropdown} onClick={handleDropdownClick}>
          {children}
        </nav>
      )}
    </div>
  )
}
