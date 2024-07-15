import {sleep} from "k6";
import {getPemeriksaanArsip} from "./GetDataArchives.js";


export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '60s', target: 200 },
    { duration: '60s', target: 500 },
    { duration: '1m30s', target: 700 },
    { duration: '1m30s', target: 900 },
    { duration: '60s', target: 300 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getPemeriksaanArsip();
  sleep(1);
}