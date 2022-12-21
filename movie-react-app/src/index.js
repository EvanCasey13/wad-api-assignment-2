import React from "react";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import UpcomingMovieDetail from "./pages/upcomingMoviesDetailsPage";
import ShowPage from "./pages/tvDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import TvPopularPage from "./pages/tvPopularPage";
import SearchMoviePage from "./pages/searchMoviePage";
import SearchShowPage from "./pages/searchTVShowPage";
import SearchActorPage from "./pages/searchActorPage";
import ActorPopularPage from "./pages/actorsPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import MoviesContextProvider from "./contexts/moviesContext";

import AuthProvider from "./AuthContext";
import ActorProvider from "./actorsContext";
import ShowProvider from "./showsContext";
import MovieProvider from "./moviesContext";
import FavouriteProvider from "./favouritesContext";
import GenreProvider from "./genresContext";
import UpcomingMovieProvider from "./upcomingMoviesContext";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider>
    <MoviesContextProvider>
    <MovieProvider>
    <ActorProvider>
    <ShowProvider>
    <UpcomingMovieProvider>
    <FavouriteProvider>
    <GenreProvider>
    <Routes>
    <Route element={<ProtectedRoutes />}>
    <Route path="/shows/popular" element={<TvPopularPage />} />
      <Route path="/actors/popular" element={<ActorPopularPage />} />
      <Route path="/actors/:id" element={<ActorPage />} />
      <Route path="/shows/:id" element={<ShowPage />} />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="/movies/upcoming/:id" element={<UpcomingMovieDetail />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/movies/search" element={<SearchMoviePage />} />
      <Route path="/shows/search" element={<SearchShowPage />} />
      <Route path="/actors/search" element={<SearchActorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
      </Route>
      
      <Route path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/reset" element={<Reset />} />

    </Routes>
    </GenreProvider>
    </FavouriteProvider>
    </UpcomingMovieProvider>
    </ShowProvider>
    </ActorProvider>
    </MovieProvider>
    </MoviesContextProvider>
    </AuthProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};
const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);