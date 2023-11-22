import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"
import DateObject from "react-date-object";
import "./forecast.css";


const ForeCast=({forecastData})=>{
    return(
        <Accordion>
            {
                forecastData.map((ele)=>(
                    <AccordionItem key={ele.date}>
                        <AccordionItemButton>
                            <div className="forecast_head">
                                <img src={ele.icon} alt="weather icon"/>
                                <span>{(new DateObject(ele.date)).format("dddd")}</span>
                                <span>
                                    <span>{ele.description}</span>
                                    <span>{ele.min_temp}<sup>o</sup>C / {ele.max_temp}<sup>o</sup>C</span>
                                </span>
                            </div>
                        </AccordionItemButton>
                        <AccordionItemPanel>
                            <div className="drop_down">
                                <div className="grid_item">
                                    <span>pressure</span>
                                    <span>{ele.pressure}</span>
                                </div>
                                <div className="grid_item">
                                    <span>clouds</span>
                                    <span>{ele.clouds}</span>
                                </div>
                                <div className="grid_item">
                                    <span>sea level</span>
                                    <span>{ele.sea_level}</span>
                                </div>
                                <div className="grid_item">
                                    <span>humidity</span>
                                    <span>{ele.humidity}</span>
                                </div>
                                <div className="grid_item">
                                    <span>wind speed</span>
                                    <span>{ele.wind}</span>
                                </div>
                                <div className="grid_item">
                                    <span>feels like</span>
                                    <span>{ele.feels_like}</span>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default ForeCast;