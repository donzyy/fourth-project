import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultLayout from '../../Layout/DefaultLayout';


function AboutUs() {
    const [aboutus, setAboutUs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const apiUrl = 'https://strapi.excavados.com:502/api/clear-cyber-about-uses'; // Replace with your API endpoint
  
      axios.get(apiUrl)
        .then(response => {
          // Assuming the response structure matches the JSON you provided
          setAboutUs(response.data.data[0]);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading...</div> {/* Add a spinner or loader */}
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-red-600">Error: {error.message}</h2>
          <p className="mt-2">Please try again later.</p>
        </div>
      );
    }

  return (
    <DefaultLayout>
      <div className="py-16 xl:py-1 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative">
            <div className="relative md:bg-white md:p-6">
              {/* Write-up Content */}
              <div className="prose prose-lg text-gray-500 mx-auto mt-6">
                <div dangerouslySetInnerHTML={{ __html: aboutus.aboutUs }} />
              </div>
              {/* Write-up Content */}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default AboutUs;