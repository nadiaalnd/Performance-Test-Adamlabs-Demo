import {getDataDaftarPasien} from "./GetAllPatient.js";
import {getDataInputHasilPemeriksaanPasien} from "./GetInputResult.js";
import {getDataVerifikasiHasilPemeriksaan} from "./GetVerification.js";
import {putDataAmbilSample} from "./PutCollectSample.js";
import {sleep} from "k6";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getDataDaftarPasien();
  getDataInputHasilPemeriksaanPasien();
  getDataVerifikasiHasilPemeriksaan();
  putDataAmbilSample();
  sleep(1);
}