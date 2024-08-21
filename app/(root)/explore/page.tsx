'use client'
import Login from "@/components/login"
import MangeAccount from "@/components/MangeAccount"

import { getPopularMovies, getTopratedMovies, getTrendingMovies } from "@/hooks/api"
import { MovieDataProps, MovieProps } from "@/props"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"


const Explore = () => {
  const [moviesData, setMoviesData] = useState<MovieDataProps[]>([])

  const {data: session} = useSession()

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const [trendingTv, topRatedTv, popularTv, trendingMovie, topRatedMovie, popularMovie] = await Promise.all([
          getTrendingMovies("tv"),
          getTopratedMovies("tv"),
          getPopularMovies("tv"),

          getTrendingMovies("movie"),
          getTopratedMovies("movie"),
          getPopularMovies("movie"),
        ])

        const tvShows: MovieDataProps[] = [
          {title: "Trending TV Shows", data: trendingTv},
          {title: "Top Rated TV Shows", data: topRatedTv},
          {title: "Popular TV Shows", data: popularTv},
        ].map(item => ({
          ...item,
          data: item.data.map((movie: MovieProps) => ({...movie, type: "tv", addedToFavorites: false}))
        }))

        const moviesShows: MovieDataProps[] = [
          {title: "Trending Movies", data: trendingMovie},
          {title: "Top Rated Movies", data: topRatedMovie},
          {title: "Popular Movies", data: popularMovie},
        ].map(item => ({
          ...item,
          data: item.data.map((movie: MovieProps) => ({...movie, type: "movie", addedToFavorites: false}))
        }))

        const allMovies = [...moviesShows, ...tvShows]
        setMoviesData(allMovies)
      } catch (e) {
        console.log(e)
      } finally {
        setPageLoader(false)
      }
    }

    getAllMovies()
  }, []);
  
  if (session === null) return <Login/>
  if (session === null) return <MangeAccount />

  return  
  
   
}

export default Explore
