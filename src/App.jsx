import { Header } from './components/Header';
import Post from './Post';

import './global.css'

export function App() {

  return (
    // when we have more than ONE component in the return, we NEED to have a container around the components
    <div>
      <Header />
      
      <Post 
      // in our components we can pass for it what is called 'properties', that you can see kind like 'attributes' in html
        author="0xREALaldc" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum harum perspiciatis sequi facilis vero impedit repellendus placeat. Aspernatur praesentium ea doloribus veniam dignissimos asperiores consectetur voluptate repudiandae, eaque amet."
      />
    </div>
  )
}
