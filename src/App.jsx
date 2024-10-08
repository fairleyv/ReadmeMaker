import './App.css'
import Navbar from "../components/Navbar"
import HowtoUse from "../components/Howtouse"
import ReadmeForm from "../components/Readmeform"
import DownloadButton from "../components/DownloadButton"
import Footer from "../components/Footer"

function App() {
    return (
    <>
        <Navbar />
        <HowtoUse />
        <ReadmeForm />
        <DownloadButton id="download--btn--component"/>
        <Footer id="footer--component"/>
    </>
    )

  
}

export default App
