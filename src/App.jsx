import './App.css'
import Navbar from "../components/Navbar"
import HowtoUse from "../components/HowtoUse"
import ReadmeForm from "../components/ReadmeForm"
import DownloadButton from "../components/DownloadButton"
import Markup from "../components/Markup"
import Footer from "../components/Footer"

function App() {
    <>
        <Navbar />
        <HowtoUse />
        <div className="readme--output">
            <ReadmeForm />
            <Markup />
        </div>
        <DownloadButton />
        <Footer />
    </>

  
}

export default App
