import { burgerType } from '../../../types/burgerTypes'
import type { NextApiRequest, NextApiResponse } from 'next'

const data = {
  "items": [
    {
      "name": "Чизбургер",
      "image": `${process.env.API_URL}/images/cheese.jpg`,
      "desc":
      "Классический бургер с бифштексом из 100% говядины с маринованными огурчиками и свежей пшеничной булочкой.",
      "price": 110,
      "id": "001"
    },
    {
      "name": "Чикен Бургер",
      "image": `${process.env.API_URL}/images/chicken.jpg`,
      "desc": "Куриный бургер с добавлением расплавленного сыра, соуса Барбекю и листового салата.",
      "price": 150,
      "id": "002"
    },
    {
      "name": "Двойной Гамбургер",
      "image": `${process.env.API_URL}/images/double.jpg`,
      "desc": "Двойной гамбургер с бифштексом из 100% говядины и расплавленным сыром Чеддер и пряным соусом.",
      "price": 200,
      "id": "003"
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<burgerType>
) {
  const { id } = req.query 
  const result = data.items.find((item)=>String(item.id) === id);

  res.send(result)
}