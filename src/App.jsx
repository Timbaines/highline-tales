import Header from '@/components/Header';
import Destination from '@/components/Destination'
import Activities from '@/components/Activities';
import Footer from '@/components/Footer';

/***** GLOBAL STYLES *****/
import './styles/globals.css';

export default function App() {

  return (
    <>
      <Header />
        <main>
            <section>
                {/*DESTINATION COMPONENT*/}
               <Destination />
            </section>
            <section>
                {/*ACTIVITIES COMPONENT*/}
                <Activities />
            </section>
        </main>
        <Footer />
    </>
  )
};