

import "./App.css";

import { Header, Landing, Service, Preferances, Potfolio, GroupNumbers, AboutUs, TheTeam, Skills, Clients, ContactUs, SendMessage, Footer, HowToDo} from "./sections/index";

import { Container } from "./component/index";


const App = () => {

    return (
        <>

            <Header />

            <Container>
                <Landing />
            </Container>

            <Container>
                <Service /> 
            </Container>

            <Container>
                <HowToDo />
            </Container>

            <Container>
                <Preferances />
            </Container>
            
            <Container>
                <Potfolio />
            </Container>

            <Container>
                <GroupNumbers />
            </Container>

            <Container>
                < AboutUs />
            </Container>

            <Container>
                <TheTeam />
            </Container>

            <Container>
                <Skills />
            </Container>

            <Container>
                <Clients />
            </Container>

            <Container>
                <ContactUs />
            </Container>


            <SendMessage />


            <Footer />
        </>
    )
}

export default App 


//          ---------------       -----------------------------