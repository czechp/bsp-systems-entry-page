import {
    faCarBattery,
    faChartColumn,
    faList,
    faScaleBalanced,
    faStamp,
    faTemperature4
} from "@fortawesome/free-solid-svg-icons";

const systems = [
    {title: "UTB", path: "192.168.6.102:9011", icon: faCarBattery},
    {title: "Zamówienia automatycy", path: "bsp-server-2.bispol.pl:9001", icon: faList},
    {title: "MES", path: "bsp-server-2.bispol:9005", icon: faChartColumn},
    {title: "WAGI TEALIGHT", path: "bsp-server-1.bispol.pl:9001", icon: faScaleBalanced},
    {title: "Pomiar temp. laboratorium", path: "192.168.1.71", icon: faTemperature4},
    {title: "FAMAG", path: "192.168.2.105", icon: faStamp},
];

export default systems;