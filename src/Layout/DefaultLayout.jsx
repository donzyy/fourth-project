import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Header2 from "../Components/Header2"

const DefaultLayout = ({ children }) => {
  return (
    <>
    {/* {<Header />} */}
    <Header2 />
        <div>
         {children}
        </div>
    {<Footer />}
    </>
  )
}

export default DefaultLayout
