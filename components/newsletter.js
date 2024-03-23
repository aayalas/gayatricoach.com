import React, { useState }  from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

const newsletter = () => {
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = document.getElementById('email').value; // Assuming there's an input field with id 'email'
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail }),
    });
    const json = await res.json();
    console.log(json);
  };
  
  return (
    <div>
          <div className="mt-4">
            <form className="w-full max-w-md mx-auto">
              <h1 className="mb-4 text-md font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white"><FormattedMessage id="page.home.title.newsletter"/></h1>   
              <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
              <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                  <input 
                    type="email" 
                    id="default-email" 
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Email..." 
                    required
                    onChange={(e) => setMail(e.target.value)}
                    value={mail} 
                  />
                  <button type="submit" className="text-gray-900 absolute right-2.5 bottom-2.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FormattedMessage id="page.home.button.newsletter"/></button>
                </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left sm:text-center text-gray-500 newsletter-form-footer dark:text-gray-300"><FormattedMessage id="page.home.text1.newsletter"/><a href="/policy" className="font-medium text-primary-600 dark:text-primary-500 hover:underline"><FormattedMessage id="page.home.text2.newsletter"/></a></div>
            </form>
          </div>
    </div>
  )
}

export default newsletter