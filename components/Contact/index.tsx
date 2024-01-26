'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">


        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#e3e6ee47] dark:to-[#e3e6ee47]"></div>
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                PA.Design studio is a website specializing in diverse and
                creative architectural design. The website proudly showcases
                unique design projects and trends in the field of architecture,
                offering you the opportunity to explore exquisite architectural
                artworks and creative ideas for your perfect home. With a focus
                on aesthetics and quality, PA Design Studio is a source of
                inspiration for those seeking information and ideas about
                beautiful and modern architecture.
              </p>


            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15"
            >

              <Image
                width={500}
                height={500}
                src="/images/logo2/logo-light.png"
                alt="Logo"
                className="dark:hidden"
                style={{ border: '5px solid black' }}
              />
              <Image
                width={500}
                height={500}
                src="/images/logo2/logo-dark.png"
                alt="Logo"
                className="hidden dark:block"
                style={{ border: '5px solid white' }}
              />
              <div className="flex text-center items-center justify-center mt-5">
                <span className="text-black dark:text-white text-3xl font-bold">
                  PA DESIGN
                </span>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.475212061519!2d106.6290307!3d10.7748689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea0e426dca3%3A0xe297ba38b2b5ca26!2zMjQgSHXhu7NuaCBWxINuIE3hu5l0LCBIb8OgIFRoYW5oLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1698295891479!5m2!1sen!2s"
                className="xl:w-[600px] md:max-w-full h-[370px] rounded-lg flex ml-[5px]"
                loading="lazy"
                style={{
                  WebkitFilter: 'grayscale(100%)',
                  filter: 'grayscale(100%)',
                }}
              />

              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h4 className="font-bold text-black dark:text-white text-[40px] mb-10">
                      Contact
                    </h4>

                    <a
                      className="flex flex-col mb-4"
                      href="https://www.google.com/maps?ll=10.774869,106.631606&z=16&t=m&hl=en&gl=US&mapclient=embed&q=24+Hu%E1%BB%B3nh+V%C4%83n+M%E1%BB%99t+Ho%C3%A0+Thanh+T%C3%A2n+Ph%C3%BA+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh"
                      target="https://www.google.com/maps?ll=10.774869,106.631606&z=16&t=m&hl=en&gl=US&mapclient=embed&q=24+Hu%E1%BB%B3nh+V%C4%83n+M%E1%BB%99t+Ho%C3%A0+Thanh+T%C3%A2n+Ph%C3%BA+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 font-bold text-[20px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mr-2" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        Address
                      </span>
                      <span className="hover:text-[#006BFF] cursor-pointer">24 Huynh Van Mot, Hiep Tan Ward, Tan Phu District, Ho Chi Minh City, Vietnam</span>
                    </a>

                    <a
                      className="flex flex-col mb-4"
                      href="tel:0902777974"
                      target="tel:0902777974"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 font-bold text-[20px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill mr-2" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        Phone Number
                      </span>
                      <span className="hover:text-[#006BFF] cursor-pointer">090 277 79 74</span>
                    </a>

                    <a
                      className="flex flex-col mb-4"
                      href="mailto:padesign.info@gmail.com"
                      target="mailto:padesign.info@gmail.com"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 font-bold text-[20px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill mr-2" viewBox="0 0 16 16">
                          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                        </svg>
                        Email
                      </span>
                      <span className="hover:text-[#006BFF] cursor-pointer">padesign.info@gmail.com</span>
                    </a>

                    <a
                      className="flex flex-col mb-4"
                      href="https://www.facebook.com/PADesign.info"
                      target="https://www.facebook.com/PADesign.info"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 font-bold text-[20px] flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook mr-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Facebook
                      </span>
                      <span className="hover:text-[#006BFF] cursor-pointer">PA Design</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  )
}

export default Contact
