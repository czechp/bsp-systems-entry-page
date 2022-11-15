import {faCarBattery, faChartColumn, faEnvelope, faScaleBalanced, faStamp} from "@fortawesome/free-solid-svg-icons";

const systems = [
    {title: "MES", path:"192.168.1.37", icon:faChartColumn},
    {title: "WAGI TEALIGHT", path: "192.168.6.94:9001", icon: faScaleBalanced },
    {title: "UTB-D", path: "192.168.2.101", icon: faCarBattery},
    {title: "UTB-AS", path: "192.168.2.115", icon: faCarBattery},
    {title: "UTB-F", path: "192.168.2.132", icon: faCarBattery},
    {title: "FAMAG", path: "192.168.2.105", icon: faStamp},
    {title: "EMAIL", path: "192.168.1.35", icon: faEnvelope },

];

export default  systems;