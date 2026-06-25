import {faCarBattery, faScaleBalanced, faStamp, faUserClock,} from "@fortawesome/free-solid-svg-icons";

const systems = [
    {title: "UTB", path: "bsp-server-3.bispol.pl:9011", icon: faCarBattery},
    {title: "Rejestracja godzin inwestycyjnych", path: "bsp-server-2.bispol.pl:9001/registered-time/check", icon: faUserClock},
    {title: "WAGI TEALIGHT", path: "bsp-server-1.bispol.pl:9001", icon: faScaleBalanced},
    {title: "FAMAG", path: "bsp-server-4.bispol.pl:9000", icon: faStamp},
    {title: "Wagi AS", path: "bsp-server-5.bispol.pl:9001", icon: faScaleBalanced}
];

export default systems;