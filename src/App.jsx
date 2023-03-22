import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import HomePage from "./homePage/HomePage"
import MoviePage from "./moviePage/Movie"
import SearchPage from "./searchPage/SearchPage"

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
