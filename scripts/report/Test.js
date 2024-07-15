import {
  getKunjunganPelaporanNilaiKritis, getKunjunganPelaporanNilaiKritisExport,
  getKunjunganPemeriksaanDuplo, getKunjunganPemeriksaanNonDuplo,
  getKunjunganPenjaminExport,
  getKunjunganReguler, getKunjunganTAT, getKunjunganTATExport,
  getKunjunganUnitAsal, getKunjunganUnitAsalExport
} from "./GetDataReport.js";
import {sleep} from "k6";


export const options = {
  vus: 10,
  duration: '30s',
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