import { postDataRegis } from './PostDataRegis.js';
import {getBeforeRegis} from "./GetBeforeRegis.js";
import {getAfterRegis} from "./GetAfterRegis.js";
import {sleep} from "k6";


export const options = {
  vus: 10,
  duration: '30s',
};

// let cycle = 1;
// let run = 1;

export default function() {
  getBeforeRegis();
  postDataRegis();
  getAfterRegis();
  sleep(1);

  // console.log(`Cycle: ${cycle}, Run: ${run}, Current VU: ${__VU}, Iteration: ${__ITER}`);
  //
  // // cycle & run
  // if (__ITER % 2 === 0) {
  //   run++;
  //   if (run > 2) {
  //     run = 1;
  //     cycle++;
  //   }
  // }
}