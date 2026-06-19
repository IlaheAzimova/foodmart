import React, { useContext, useState } from 'react'
import img1 from '././assets/main1.png'
import img2 from '././assets/main2.png'
import img3 from '././assets/main3.png'
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { DATA } from './Components/context/DataContext';



function Index() {
    const { product, cart, setCart } = useContext(DATA)
    const [count, setCount] = useState(1)

    function addToCart(item) {
        setCart([...cart, item]);
    }
    return (
        <>
            <section>
                <div className="container w-[90%] mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="lg:flex gap-10 ">
                            <div className="bg-[#e6f3fa] p-10 lg:h-[80vh] rounded-lg lg:w-[50%]">
                                <div className="md:flex">
                                    <div className="text">
                                        <span className='text-[#ffc43f] text-[30px]'>100% Natural</span>
                                        <h3 className='text-[37px] font-[600] py-2 text-[#222] w-[70%]'>Fresh Smoothie & Summer Juice</h3>
                                        <p className='text-[#777] w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem facere adipisci.</p>
                                        <button className='p-3 uppercase border border-[#222] rounded-md my-5 px-6 hover:bg-[#222] hover:text-white duration-300 cursor-pointer'>Shop Now</button>

                                    </div>
                                    <div className="img">
                                        <img src={img1} alt="slider image" className='mx-auto' />
                                    </div>



                                </div>

                            </div>
                            <div className="lg:flex flex-col gap-10 lg:w-[50%]">
                                <div className="bg-[#eef5e5] lg:h-[35vh] my-10 lg:m-0 px-10 pt-10 pb-50 rounded-lg relative">
                                    <div className=" md:flex">
                                        <div className="text">
                                            <span className=' text-[30px]'>20% Off</span>
                                            <h3 className='text-[16px]  py-2 text-[#222] '>---------SALE</h3>
                                            <h3 className='text-[37px] font-[600] py-2 text-[#222] '>Fruits & Vegetables</h3>
                                            <p className='text-[#777] w-[90%]'>Shop Collections ⟶</p>


                                        </div>
                                        <div className="img  ">
                                            <img src={img2} alt="slider image" className='absolute right-0 bottom-0 rounded-r-lg' />
                                        </div>



                                    </div>

                                </div>
                                <div className="bg-[#f9ebe7] lg:h-[35vh] px-10 pt-10 pb-70 rounded-lg relative">
                                    <div className=" md:flex">
                                        <div className="text">
                                            <span className=' text-[30px]'>15% Off</span>
                                            <h3 className='text-[16px]  py-2 text-[#222] '>---------SALE</h3>
                                            <h3 className='text-[37px] font-[600] py-2 text-[#222] '>Baked Products</h3>
                                            <p className='text-[#777] w-[90%]'>Shop Collections ⟶</p>


                                        </div>
                                        <div className="img  ">
                                            <img src={img3} alt="slider image" className='absolute right-0 bottom-0 rounded-r-lg' />
                                        </div>



                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>


                </div>
            </section>
            <section className='py-30'>
                <div className="container w-[90%] mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-[20%]">
                            <h3 className='text-[#222] font-[500] text-[22px]'>Trending Products</h3>

                        </div>

                        <div className="flex items-center uppercase gap-5 ">
                            <span>All
                                <hr className='border-0 bg-[#FFC43F] h-0.5' />
                            </span>
                            <span>Fruits & Veges

                            </span>
                            <span>Juices

                            </span>
                        </div>

                    </div>
                    <hr className='border-0 bg-[#eee] h-[0.2px] my-5' />
                    <div className="cards my-10 flex flex-col gap-10 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {product.map((item, i) => {
                            return <div key={i} className="card bg-white shadow-lg p-4 rounded-lg">
                                <div className="img bg-[#eee] rounded-lg relative ">
                                    <img src={item.image} alt="" className='mx-auto h-[20vh]  ' />
                                    <span className='bg-[#a3be4c] text-white p-1 text-[12px] rounded-md font-[600] absolute top-5 left-5'>-30%</span>
                                    <span className="absolute top-2 right-2">
                                        <FaRegHeart className='bg-white w-12 h-12 p-3 rounded-[100%] border border-[#bbb] hover:bg-[#dc3545] hover:text-[white] duration-300' />

                                    </span>
                                </div>
                                <div className="text py-3">
                                    <h3 className='text-[#222] font-[500] text-[18px]'>{item.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className='text-[#777] text-[14px] py-2'>1 UNIT</span>
                                        <div className="flex items-center gap-2">
                                            <FaStar className='text-[#FFC43F]' />
                                            <span className='text-[#222] font-[700] text-[14px]'>4.5</span>
                                        </div>

                                    </div>
                                    <span className='text-[#222] font-[700] text-[22px]'>${item.price}.00</span>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 my-2">
                                            <button onClick={() => count > 1 && setCount(count - 1)} className='border-[#b6b5b5] border px-2 text-[16px] rounded-md'>-</button>
                                            <span className='text-[#777]'>{count}</span>
                                            <button onClick={() => setCount(count + 1)} className='border-[#b6b5b5] border px-2 text-[16px] rounded-md'>+</button>
                                        </div>
                                        <div onClick={() => setCart([...cart, item])} className="bg-[#FFC43F] p-2 text-white rounded-md font-[600] hover:bg-[#efae17] duration-300">
                                            <span>Add to Cart</span>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        }
                        )}



                    </div>


                </div>
            </section>

        </>
    )
}

export default Index
