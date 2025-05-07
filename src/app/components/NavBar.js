'use client'
import React, {useState} from 'react'
import Image from "next/image";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }
  return (
    <nav className="fixed w-full top-0 left-0 backdrop-blur-xl shadow-lg z-50 p-4">
        <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center">
            <Image
            className="dark:invert"
            src="/logo_estandar_clima.png"  // Cambia esta ruta por tu logotipo
            alt="Estándar Clima SPA"
            width={180}
            height={38}
            />
            <ul className="flex space-x-8 text-black font-medium text-lg">
                <li>
                    <a href="#services" className="hover:underline">Servicios</a>
                </li>
                <li>
                    <a href="#how-it-works" className="hover:underline">¿Cómo Funciona?</a>
                </li>
            </ul>
        </div>
        <div className="max-w-7xl mx-auto md:hidden flex justify-between items-center">
            <Image
            className="dark:invert bg-gray-500"
            src="/logo_estandar_clima.png"  // Cambia esta ruta por tu logotipo
            alt=""
            width={38}
            height={38}
            />
            <button onClick={handleShowMenu} className="flex flex-col justify-center px-2 gap-1 w-10 h-10">
                <hr className="w-full h-1 bg-blue-950 rounded-sm" />
                <hr className="w-full h-1 bg-blue-950 rounded-sm" />
                <hr className="w-full h-1 bg-blue-950 rounded-sm" />
            </button>
        </div>
        {
            showMenu && (
                <div className='absolute top-18 left-0 py-6 w-full bg-amber-200'>
                    <ul className="flex flex-col gap-4 space-x-8 px-3 text-black font-medium text-lg">
                        <li>
                            <a href="#services" className="hover:underline">Servicios</a>
                        </li>
                        <li>
                            <a href="#how-it-works" className="hover:underline">¿Cómo Funciona?</a>
                        </li>
                    </ul>
                </div>
            )
        }
    </nav>
  )
}

export default NavBar
