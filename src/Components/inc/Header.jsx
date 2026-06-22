import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useContext } from 'react'
import { DATA } from '../context/DataContext'



function Header() {
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const { cart } = useContext(DATA)
    let total = 0

    cart.forEach(item => {
        total += item.price
    })
    const { product } = useContext(DATA)
    const [search, setSearch] = useState('')
    const filtered = search && search && product !== 0 ?
        product.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())

        ) : []



    return (
        <header className='fixed w-full z-50 bg-[white]'>
            <div className="container w-[90%] mx-auto">
                <div className="flex flex-col justify-center py-5">
                    <div className="md:flex items-center justify-between">
                        <div className="flex justify-center">
                            <img src={logo} alt="" className='w-55 ' />

                        </div>
                        <div className="hidden lg:flex items-center">

                            <select name="" id="" className='bg-[#eee] p-3  rounded-l-xl text-[16px] text-[#777]'>
                                <option value="">All Categories</option>
                                <option value="">Grocories</option>
                                <option value="">Drinks</option>
                                <option value="">Chocolates</option>
                            </select>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search for more than 20' className=' outline-0 bg-[#eee] text-[14px] p-3' />
                            <button className='rounded-r-xl bg-[#eee] text-[16px] p-3.5 text-[#777]'><FaMagnifyingGlass /> </button>

                            {search && (
                                <div className="absolute top-25  w-[430px] mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">

                                    {filtered.length > 0 ? (
                                        filtered.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-4 p-4 hover:bg-gray-50 duration-200 cursor-pointer border-b border-gray-100 last:border-b-0"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-14 h-14 object-cover rounded-xl bg-gray-100 shrink-0"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-800 text-sm">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-yellow-500 font-bold">
                                                        ${item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-6 text-center text-gray-400 text-sm">
                                            Product not found
                                        </div>
                                    )}

                                </div>
                            )}
                        </div>
                        <div className="hidden xl:flex flex-col">
                            <span className='text-[#777]'>For support?</span>
                            <span className='text-[#222] text-right font-[600] text-[20px]'>+980 34984089</span>


                        </div>


                        <div className="icons flex justify-center gap-3 py-5">
                            <FaRegUser className='bg-[#eee] w-8 h-8 p-1.5 rounded-[100%]' />
                            <FaRegHeart className='bg-[#eee] w-8 h-8 p-1.5 rounded-[100%]' />
                            <SlBasketLoaded className='bg-[#eee] w-8 h-8 p-1.5 rounded-[100%] lg:hidden' />
                            <IoIosSearch className='bg-[#eee] w-8 h-8 p-1.5 rounded-[100%] lg:hidden' />

                        </div>
                        <div className="card  flex-col hidden lg:flex">
                            <span onClick={() => setCartOpen(true)} className='text-[#777] relative'>Your Cart ▼
                                <span className="absolute -top-2 -right-4 bg-yellow-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                                    {cart.length}
                                </span>
                            </span>

                            <span className='text-[#222] text-center font-[600] text-[20px]'>$1290.00</span>
                        </div>

                    </div>
                    <div
                        className={`fixed top-0 right-0 h-screen w-[400px] bg-white z-50 duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <button
                            onClick={() => setCartOpen(false)}
                            className="absolute top-5 right-5 text-3xl"
                        >
                            ✕
                        </button>

                        <div className="p-6">
                            <h2 className="text-4xl font-bold text-yellow-500 mb-8">
                                Your cart
                            </h2>

                            <div className="border p-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between mb-4">
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6 border-t pt-4 font-bold">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>

                            <button className="w-full mt-6 bg-yellow-400 py-4 rounded-lg text-white text-xl">
                                Continue to checkout
                            </button>
                        </div>
                    </div>

                    <hr className='border-0 bg-[#eee] h-[0.2px] mb-5' />
                    <div onClick={() => setOpen(true)} className='border-[#eee] lg:hidden border p-3 w-[17%] mx-auto md:m-0 md:w-[10%] rounded-lg hover:border-3 duration-300'>
                        <FaBars className=' mx-auto text-[20px] text-[#777] ' />
                    </div>
                    <div className="hidden xl:flex">
                        <ul className='flex gap-10 text-[#777] my-5 text-[16px]'>
                            <li><select name="" id="">
                                <option value="">Show by Departments</option>
                                <option value="">Groceries</option>
                                <option value="">Drinks</option>
                                <option value="">Chocolates</option>
                            </select></li>
                            <li>
                                Women
                            </li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>Accessories</li>
                            <li>Pages</li>
                            <li>Brand</li>
                            <li>Sale</li>
                            <li>Blog</li>
                        </ul>

                    </div>

                </div>

            </div>
            <div
                className={`fixed inset-0 bg-black/40 z-40 duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            ></div>

            <div
                className={`fixed top-0 right-0 h-screen w-[55%] bg-white z-50 duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-5 right-5 text-3xl"
                >
                    ✕
                </button>

                <div className="p-8 mt-12">
                    <select className="w-full border rounded-lg p-4 mb-8">
                        <option>Shop by Departments</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolates</option>
                    </select>

                    <ul className="space-y-6">
                        <li className="border-b pb-4 font-semibold">Women</li>
                        <li className="border-b pb-4 font-semibold">Men</li>
                        <li className="border-b pb-4 font-semibold">Kids</li>
                        <li className="border-b pb-4 font-semibold">Accessories</li>
                        <li className="border-b pb-4 font-semibold">Pages</li>
                        <li className="border-b pb-4 font-semibold">Brand</li>
                        <li className="border-b pb-4 font-semibold">Sale</li>
                        <li className="border-b pb-4 font-semibold">Blog</li>
                    </ul>
                </div>
            </div>


        </header>
    )
}

export default Header
