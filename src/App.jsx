import './App.css'
import Navbar from "../components/Navbar"
import HowtoUse from "../components/HowtoUse"
import ReadmeForm from "../components/ReadmeForm"
import DownloadButton from "../components/DownloadButton"
import ReadmeMarkup from "../components/ReadmeMarkup"
import Footer from "../components/Footer"

function App() {
    return (
    <>
        <Navbar />
        <HowtoUse />
        <div className="readme--output">
            <ReadmeForm />
            <ReadmeMarkup />
        </div>
        <DownloadButton />
        <Footer />
    </>
    )

  
}

export default App
