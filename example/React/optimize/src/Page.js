import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import List from './List';
import Footer from './Footer';
import Observer from './Observer';


function Page(props) {
  const  getGallery =  (isVisible) => {
      console.log('Page isVisible:', isVisible)
      return <Gallery isVisible={isVisible} />
  }
  return (
    <div>
      <Header />
      <Observer>
        {getGallery}
      </Observer>
      <Observer>
        {
          isVisible => <List isVisible={isVisible} />
        }
      </Observer>
      <Footer />
    </div>
  )
}
export default Page;
