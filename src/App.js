import './index.css';
import {Main, Footer} from './components'

function App() {

  const Links = [
    {
      name: "Twitter Link",
      href: "https://twitter.com/samueljrweb",
      id: "twitter",
    },
    {
      name: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      name: "Zuri Books",
      href: "http://books.zuri.team",
      id: "books",
      title: "get all your design and coding books here",
    },
    {
      name: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=samueljr-web",
      id: "book__python",
    },
    {
      name: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Design Books",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="">
     <Main Link={Links}/>
     <Footer />
    </div>
  );
}

export default App;