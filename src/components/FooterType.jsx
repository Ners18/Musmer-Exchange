import React from 'react';
import { AiFillInstagram, } from "react-icons/ai";
import { BsFillTelephoneFill} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from '../assets/musmer_exchange-white-lggo.png'

function FooterType() {
  return (
    <div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-[29%]">
              <a className="flex items-center">
                  <img src={logo} className="h-8 mr-3" alt="Musmer Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
          </div>
          <div className=" flex gap-8 sm:gap-6 sm: flex-1 p-30 justify-evenly text-sx">
          
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.facebook.com/musmerexchange" className="hover:underline ">Facebook</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/musmer_exchange/" className="hover:underline">Instagram</a>
                      </li>
                     
                  </ul>
              </div>
              <div className='flex-row justify-between items-center'>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4 flex items-center">
                        <BsFillTelephoneFill className="mr-2" />
                        <a href="tel:+905338728888" className="hover:underline">
                            +90 392 444 88 22
                        </a>
                    </li>
                        <li className='text-sx flex items-center'>
                           <MdEmail className="mr-2"/> 
                            <a href="mailto:info@musmerexchange.com" className="hover:underline">
                                info@musmerexchange.com
                            </a>
                        </li>
                    </ul>
                </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Musmer Exchange. All Rights Reserved. Built by <a className='underline' href='https://cypruscodes.com/index.html'>CyprusCodes™</a>
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/musmerexchange" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/musmer_exchange/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
               <AiFillInstagram className='w-4 h-4'></AiFillInstagram> 
                  <span className="sr-only">Instagram community</span>
              </a>
              <a href="https://twitter.com/musmerltd" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
            
             
          </div>
      </div>
    </div>

      
    </div>
  )
}

export default FooterType