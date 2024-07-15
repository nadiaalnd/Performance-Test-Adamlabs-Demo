import {
  getKunjunganPelaporanNilaiKritis, getKunjunganPelaporanNilaiKritisExport,
  getKunjunganPemeriksaanDuplo, getKunjunganPemeriksaanNonDuplo,
  getKunjunganPenjaminExport,
  getKunjunganReguler, getKunjunganTAT, getKunjunganTATExport,
  getKunjunganUnitAsal, getKunjunganUnitAsalExport
} from "./GetDataReport.js";
import {sleep} from "k6";

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
  getKunjunganReguler();
  getKunjunganUnitAsal();
  getKunjunganPenjaminExport();
  getKunjunganPemeriksaanDuplo();
  getKunjunganTAT();
  getKunjunganPelaporanNilaiKritis();
  getKunjunganPelaporanNilaiKritisExport();
  getKunjunganTATExport();
  getKunjunganPemeriksaanNonDuplo();
  getKunjunganUnitAsalExport();
  getKunjunganPenjaminExport();
  sleep(1);
}