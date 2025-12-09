import {
    faCarBattery,
    faList,
    faScaleBalanced,
    faStamp,
} from "@fortawesome/free-solid-svg-icons";

const systems = [
    {title: "UTB", path: "bsp-server-3.bispol.pl:9011", icon: faCarBattery},
    {title: "Zamówienia automatycy", path: "bsp-server-2.bispol.pl:9001", icon: faList},
    {title: "WAGI TEALIGHT", path: "bsp-server-1.bispol.pl:9001", icon: faScaleBalanced},
    {title: "FAMAG", path: "bsp-server-4.bispol.pl:9000", icon: faStamp},
    {title: "Wagi AS", path: "bsp-server-5.bispol.pl:9001", icon: faScaleBalanced}
];

export default systems;