import React from 'react';
import {Helmet} from "react-helmet";

const p1 = 'Before the start of clinical trials the vaccine had gone through all stages of pre-clinical trials with experiments on different types of animals, including 2 types of primates.'

const p2 = 'Phase 1 and 2 clinical trials of the vaccine have been completed on August 1, 2020. All the volunteers are feeling well, no unforeseen or unwanted side effects were observed. The vaccine induced strong antibody and cellular immune response. Not a single participant of the current clinical trials got infected with COVID-19 after being administered with the vaccine. The high efficacy of the vaccine was confirmed by high precision tests for antibodies in the blood serum of volunteers (including an analysis for antibodies that neutralize the coronavirus), as well as the ability of the immune cells of the volunteers to activate in response to the spike S protein of the coronavirus, which indicates the formation of both antibody and cellular immune vaccine response.'

const p3 = 'Phase 3 clinical trial involving more than 2,000 people in Russia, a number of Middle Eastern (UAE and Saudi Arabia), and Latin American countries (Brazil and Mexico) will start on August 12. The vaccine has received a registration certificate from the Russian Ministry of Health on August 11 and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia. Mass production of the vaccine is expected to start in September 2020.'

const p4 = 'The unique substance of the Sputnik V and method of using it has a patent protection in Russia, obtained by Gamaleya National Research Institute of Epidemiology and Microbiology.'

const ClinicalTrial = () => {
    return (
        <div className="clinicalTrial">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Clinical Trials</title>
                <meta name="description" content={p2} />
            </Helmet>            
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
        </div>
    );
}

export default ClinicalTrial
