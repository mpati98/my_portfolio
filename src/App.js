import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot"
import { ChatbotScript } from "./components/Chatbot_scripts"
import { ChatbotTheme } from "./components/Chatbot_theme"
import { ChatbotConfig } from "./components/Chatbot_config"
import { stepifyScript } from './components/Utils';
import { Delayed } from './components/Delay'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      <Delayed>
      <ThemeProvider theme={ChatbotTheme}>
        <ChatBot
          headerTitle="ArtiBot"
          {...ChatbotConfig}
          bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
          steps={stepifyScript(ChatbotScript)}
          />
          console.log(steps)
      </ThemeProvider>
      </Delayed>
    </div>
  );
}

export default App;
