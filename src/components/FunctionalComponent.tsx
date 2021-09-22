import { useEffect, useState } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

interface Book {
  title: string
  description: string
  price: string
  imageUrl: string
  id: number
}

interface ManyStrings {
  [ingrid: string]: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [data, setData] = useState<Book[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // let's say we're doing a fetch...
      let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
      let books = await response.json()
      setData(books)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>FUNCTIONAL COMPONENT!</h1>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <ul>
        {data.map((book) => (
          <>
            <li>{book.title}</li>
            <li>{book.description}</li>
          </>
        ))}
      </ul>
      {/* <h6 onClick={() => setName('Stefano')}>{name}</h6> */}
    </div>
  )
}

export default FunctionalComponent
