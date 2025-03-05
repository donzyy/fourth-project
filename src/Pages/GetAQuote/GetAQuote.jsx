import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'

function GetAQuote() {
  return (
    <DefaultLayout>
<section className="py-24 lg:pt-32 lg:pb-28 bg-gray-100 overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="md:max-w-xl mx-auto">
      <div className="mb-14 text-center">
        <span className="inline-block max-w-max mb-8 px-3 py-1.5 text-sm text-black uppercase tracking-tight font-semibold bg-gray-600 rounded-full">Try some freebie</span>
        <h2 className="font-heading mb-4 text-6xl text-gray-700 tracking-tighter">Get Free Estimation</h2>
        <p className="text-xl tracking-tight">Our visual designer lets you quickly and of thei drag and drop your way to customapps for ton both desktop, mobile &amp; also</p>
      </div>
      <form className="flex flex-wrap -m-3" action="#">
        <div className="w-full md:w-1/2 p-3">
          <label className="block">
            <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg duration-200" id="contactInput5-1" type="text" placeholder="First Name" />
          </label>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <label className="block">
            <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg duration-200" id="contactInput5-2" type="text" placeholder="Last Name" />
          </label>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <label className="block">
            <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg duration-200" id="contactInput5-3" type="email" placeholder="Email Address" />
          </label>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <label className="block">
            <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg duration-200" id="contactInput5-4" type="text" placeholder="Website URL" />
          </label>
        </div>
        <div className="w-full p-3">
          <div className="relative border border-gray-700 overflow-hidden rounded-lg">
            <label className="sr-only" htmlFor="select">My field</label>
            <select className="appearance-none w-full py-4 px-4 bg-white outline-none" id="contactSelect5-1" name="select">
              <option value>What type of service are you looking for?</option>
              <option value={1}>Service 1</option>
              <option value={2}>Service 2</option>
              <option value={3}>Service 3</option>
            </select>
            <div className="pointer-events-none absolute right-5 top-0 bottom-0 flex items-center">
              <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8346 1.5L7.0013 7.33333L1.16797 1.5" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full p-3">
          <label className="block"><textarea className="block p-4 w-full placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg resize-none duration-200" id="contactTextarea5-1" rows={7} placeholder="Project Brief" defaultValue={""} /></label>
        </div>
        <div className="w-full p-3">
          <button type="submit" className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Try 14 Days Free Trial</button>
          <span className="text-sm text-gray-600 tracking-tight">* We never share user details with third parties, period.</span>
        </div>
      </form>
    </div>
  </div>
</section>

    </DefaultLayout>
  )
}

export default GetAQuote
