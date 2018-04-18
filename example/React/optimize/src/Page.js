import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import List from './List';
import Footer from './Footer';
import Observer from './Observer';


function Page(props) {
  return (
    <div>
      <Header />
      <Observer>
        { isVisible => <Gallery isVisible={isVisible} /> }
      </Observer>
      <Observer>
        { isVisible => <List isVisible={isVisible} /> }
      </Observer>
      <Footer />
    </div>
  )
}
export default Page;
