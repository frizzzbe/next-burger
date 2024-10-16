import type { ReviewType } from "@/types/reviewTypes"

export type PropsType = {
  res: ReviewType
  onClick: () => void
  key: number
}
