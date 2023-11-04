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
        {/* <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                    <div className="mt-8">
                        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span className="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div className="mt-12 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div> */}

        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
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

              {/* <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />
                </div>

                <div className="flex mb-11.5">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap xl:justify-between ">
                  <div className="flex mb-4 md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form> */}
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
              {/* <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
                Award
              </h2>

              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Award 1
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Award 2
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Award 3
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div> */}
              <Image
                width={500}
                height={500}
                src="/images/logo/logo-light.png"
                alt="Logo"
                className="dark:hidden"
                style={{ border: '5px solid black' }}
              />
              <Image
                width={500}
                height={500}
                src="/images/logo/logo-dark.png"
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
                className="w-[650px] h-[400px] rounded-lg flex ml-[-50px]"
                loading="lazy"
                style={{
                  WebkitFilter: 'grayscale(100%)',
                  filter: 'grayscale(100%)',
                }}
              />

              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                      Contact
                    </h4>
                    <p className="flex mb-4">
                      <span className="mr-2 font-medium">Address:</span>
                      <span>
                        24 Huỳnh Văn Một, phường Hiệp Tân, Tân Phú , Ho Chi Minh
                        City, Vietnam
                      </span>
                    </p>
                    <p className="flex mb-4">
                      <span className="mr-2 font-medium">Phone Number:</span>
                      <a href="tel:0902777974" className="hover:text-[#006BFF]">
                        090 277 79 74
                      </a>
                    </p>
                    <p className="flex mb-4">
                      <span className="mr-2 font-medium">Email:</span>
                      <a
                        href="mailto:padesign.info@gmail.com"
                        className="hover:text-[#006BFF]"
                      >
                        padesign.info@gmail.com
                      </a>
                    </p>
                    <a
                      className="flex items-center hover:text-[#006BFF] cursor-pointer"
                      href="https://www.facebook.com/PADesign.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                      <span>PA Design</span>
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
