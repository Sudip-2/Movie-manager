import React, {useState } from 'react'
import { useForm } from "react-hook-form"
import './search.css'
import {Link, useNavigate} from 'react-router-dom'

const Searchbox = () => {

  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [recomendation, setRecomendation] = useState()
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const showRecomendation = async () => {
    let apikey = import.meta.env.VITE_Apikey
    let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=${text}`

    let data = await fetch(apiUrl)
    let response = await data.json()
    let dataArray = await response.Search
    console.log(dataArray)
    if (dataArray != undefined) {
      setShow(true)
    }
    else {
      setShow(false)
    }
    if (dataArray != undefined) {
      let titleImg = dataArray.map((item) => {
        let obj = {
          img: item.Poster,
          title: item.Title
        }

        return (
          <Link to={`/page/${item.imdbID}`} key={item.imdbID}>
          <div className='py-2 px-2 my-2 rounded-md flex hover:bg-gray-600 cursor-pointer items-center gap-2'
            onClick={() => {
              setText(obj.title)
              setShow(false)
            }}
          >
            <img src={obj.img} alt="picture"
              className='w-[50px] object-cover rounded-md'
            />
            <div className=''>{obj.title}</div>
          </div>
          </Link>
        )
      })
      return titleImg
    }
  }


  const submit = () => {
    // console.log("Hello world")
    navigate(`/search?title=${text}`)
    setShow(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className='flex absolute left-0 top-[63px] max-w-[1200px] w-full sm:static sm:w-auto'>

        <input type="search" {...register("user", {
          required: { value: true, message: "Enter a search term" }
        }
        )}
          placeholder='Enter Movie name'
          className='w-9/12 sm:w-auto outline-none search-input bg-gray-700 text-gray-300 placeholder:text-gray-300 px-4 py-2 sm:rounded-tl-md sm:rounded-bl-md md:w-[300px] lg:w-[450px]'
          autoComplete='off'
          onChange={async (e) => {
            setText(e.target.value)
            let lists = await showRecomendation()
            setRecomendation(lists)
          }}
          value={text}
        />
        {errors.user && <div className='absolute top-[45px] sm:top-[60px] bg-slate-700 text-red-600 rounded-md px-2 py-1'>{errors.user.message}</div>}

        {/* search container */}
        <div className={`searchValContainer absolute top-[42px] sm:top-[60px] max-w-[1200px] w-full sm:w-auto md:min-w-[300px] lg:min-w-[450px] h-auto max-h-[315px] bg-gray-700 text-gray-300 rounded-md px-4 py-2 overflow-y-auto ${show ? "block" : "hidden"}`}>

          {/* {recomendation} */}
          {recomendation}
        </div>

        {/* search container */}

        <input type="submit"
          value="Search"
          className='w-3/12 sm:w-auto bg-red-600 px-4 py-2 sm:rounded-tr-md sm:rounded-br-md text-gray-200 cursor-pointer'
        />
      </form>
    </>
  )
}

export default Searchbox