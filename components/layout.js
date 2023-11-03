import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <>
      <div className="content">
        <Header/>
        <main className='mainWrapper'>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout