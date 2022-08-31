import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout, {StickyTopContainer} from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";
import LoginRequirementPage from "./useCase/warningPages/LoginRequirementPage";
import StatementCmp from "./component/StatementCmp";
import AdminRequirementPage from "./useCase/warningPages/AdminRequirementPage";
import HomePage from "./useCase/home/HomePage";

export const StatementContext = createStatementContext();

function App() {
    const statementContextValue = useProvideStatementValues();


    return (<div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyles/>

            <StatementContext.Provider value={statementContextValue}>
                <BrowserRouter>
                    <ContainerLayout>
                        <StickyTopContainer>
                            <TopBarLayout/>
                        </StickyTopContainer>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/not-logged" element={<LoginRequirementPage/>}/>
                            <Route path="/admin-access" element={<AdminRequirementPage/>}/>
                        </Routes>

                    </ContainerLayout>
                </BrowserRouter>
                <StatementCmp/>
            </StatementContext.Provider>
        </ThemeProvider>


    </div>);
}

export default App;
