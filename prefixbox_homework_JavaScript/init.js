import {Alert} from "./Feladat_Alert.js";
import {NameChange} from "./Feladat_NameChange.js";

function main() {
    Alert.alert_data();
    console.log("Alert loaded");
    NameChange.name_changer();
    console.log("Name changer loaded");

}

main();