import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FaPlayCircle } from "react-icons/fa";
import "./header.scss"
export default function Header() {
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/search?value=${search.replace(/ /g, '+')}`
        
    }
    return (
        <header className="header container fluid">
            <div className="headerWrapper">
                <Link className="logo" to="/">
                    <FaPlayCircle /> KCKFILMS
                </Link>
                <form onSubmit={handleSubmit} className="search">
                    <span className="uil uil-search"></span>
                    <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </form>

            </div>
        </header>
    )
}