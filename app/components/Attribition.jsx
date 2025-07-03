import React from 'react'
import { FaInstagram, FaLink, FaLinkedinIn } from 'react-icons/fa'

const Attribition = () => {
    return (
        <div>

            {/* DevPixel Attribution */}
            <div className="w-full mx-auto flex items-center flex-col justify-center text-white bg-black/75 p-4 mt-6">
                <div className="flex items-center justify-center text-white border-t border-gray-200 gap-4 text-center text-sm">
                    Designed with ❤️ by{' '}
                    <a
                        href="https://devpiksel.com"
                        className="hover:underline font-semibold text-clifford"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/devpixel-logo.png"
                            alt="DevPixel Logo"
                            width={100}
                            height={100}
                            className="inline-block"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <a
                        href="https://devpiksel.com"
                        className="text-white hover:text-green-500 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLink />
                    </a>
                    <a
                        href="https://www.instagram.com/devpixeltech/"
                        className="text-white hover:text-pink-600 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/devpixel-tech"
                        className="text-white hover:text-blue-700 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            {/* DevPixel Attribution */}
        </div>
    )
}

export default Attribition
