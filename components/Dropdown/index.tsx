import { useState, useRef, useEffect } from "react"
import style from "./Dropdown.module.css"
import { CiUser } from "react-icons/ci"
import type { DropdownProps } from "./types"

export const Dropdown = ({ children }: DropdownProps) => {
  const container = useRef<HTMLDivElement>()
  const [dropdownState, setDropdownState] = useState({ open: false })

  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open })

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false })
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className={style.container} ref={container}>
      <button type="button" className={style.button} onClick={handleDropdownClick}>
        <CiUser />
      </button>
      {dropdownState.open && <nav className={style.dropdown}>{children}</nav>}
    </div>
  )
}
