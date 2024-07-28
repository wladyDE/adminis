import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from './scenes/global/Topbar'
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/";
import Invoices from "./scenes/invoices/index.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import Bar from "./scenes/bar/Bar.jsx";
import Form from "./scenes/form/index.jsx";
import Line from "./scenes/line/Line.jsx";
import Pie from "./scenes/pie/Pie.jsx";
import FAQ from "./scenes/faq/FAQ.jsx";
import Geography from "./scenes/geography/Geography.jsx";
import Calendar from "./scenes/calendar/index.jsx";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar/>
          <main className="content">
            <TopBar/>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/geography" element={<Geography />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
