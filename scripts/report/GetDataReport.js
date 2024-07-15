import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const ENDPOINTS = {
  'kunjungan_reguler': '/rekapitulasi/rekap_kunjungan_pasien_reguler/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_unit_asal': '/rekapitulasi/rekap_unit_asal/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=P&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_pemeriksaan_duplo': '/rekapitulasi/rekap_pemeriksaan_duplo/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_tat': '/rekapitulasi/rekap_tat/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_pelaporan_nilai_kritis': '/rekapitulasi/rekap_pelaporan_nilai_kritis/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_pelaporan_nilai_kritis_export': '/rekapitulasi/rekap_pelaporan_nilai_kritis_export/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_tat_export': '/rekapitulasi/rekap_tat_export/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_pemeriksaan_non_duplo': '/rekapitulasi/rekap_pemeriksaan_non_duplo/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_unit_asal_export': '/rekapitulasi/rekap_unit_asal_export/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
  'kunjungan_penjamin_export': '/rekapitulasi/rekap_penjamin_export/read?start_date=2024-07-01&end_date=2024-07-31&jenis_registrasi=&jenis_kelamin=&kode_rs=W01&kode_lab=LAB_SMC',
};

export const options = {
  vus: 10,
  duration: '30s',
};

// endpoint kunjungan reguler
export function getKunjunganReguler() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_reguler}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan unit asal
export function getKunjunganUnitAsal() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_unit_asal}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan penjamin export
export function getKunjunganPenjaminExport() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_penjamin_export}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan pemeriksaan duplo
export function getKunjunganPemeriksaanDuplo() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_pemeriksaan_duplo}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan TAT
export function getKunjunganTAT() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_tat}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan pelaporan nilai kritis
export function getKunjunganPelaporanNilaiKritis() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_pelaporan_nilai_kritis}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan pelaporan nilai kritis export
export function getKunjunganPelaporanNilaiKritisExport() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_pelaporan_nilai_kritis_export}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan TAT export
export function getKunjunganTATExport() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_tat_export}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan pemeriksaan non duplo
export function getKunjunganPemeriksaanNonDuplo() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_pemeriksaan_non_duplo}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}

// endpoint kunjungan unit asal export
export function getKunjunganUnitAsalExport() {
  const res = http.get(`${BASE_URL_DEMO}${ENDPOINTS.kunjungan_unit_asal_export}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

}
