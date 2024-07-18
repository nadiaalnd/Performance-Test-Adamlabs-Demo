import {getDataDaftarPasien} from "./GetAllPatient.js";
import {getDataInputHasilPemeriksaanPasien} from "./GetInputResult.js";
import {getDataVerifikasiHasilPemeriksaan} from "./GetVerification.js";
import {putDataAmbilSample} from "./PutCollectSample.js";
import {sleep} from "k6";
import {postPemeriksaanArsip} from "./PostDataArchives.js";


export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '60s', target: 200 },
    { duration: '60s', target: 400 },
    { duration: '1m30s', target: 600 },
    { duration: '1m30s', target: 900 },
    { duration: '60s', target: 100 },
    { duration: '15s', target: 0 },
  ],
};

export default function() {
  getDataDaftarPasien();
  getDataInputHasilPemeriksaanPasien();
  getDataVerifikasiHasilPemeriksaan();
  putDataAmbilSample();
  postPemeriksaanArsip();
  sleep(1);
}