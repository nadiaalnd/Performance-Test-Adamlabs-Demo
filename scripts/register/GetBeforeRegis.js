import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const GET_ENDPOINTS_BEFORE = [
  '/datamaster/item_pemeriksaan_all/read?&page=0&page_size=1000&kode_rs=W01&kode_lab=LAB_SMC',
  '/pasien/pasien_aktif/read?&no_rm=&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/paket_pemeriksaan_aktif/read?&page=0&page_size=1000&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/provinsi_aktif/read?nama=&page=0&page_size=10000&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/unit_asal_aktif/read?nama=&page=0&page_size=10&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/penjamin_aktif/read?nama=&page=0&page_size=10&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/dokter_pengirim_aktif/read?nama=&page=0&page_size=1000&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/icdt_aktif/read?nama=&page=0&page_size=1000&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/kabupaten_aktif/read?&provinsi_id=35&page=0&page_size=10000&kode_rs=W01&kode_lab=LAB_SMC',
  '/datamaster/kecamatan_aktif/read?page=0&page_size=10000&kabupaten_id=3578&kode_rs=W01&kode_lab=LAB_SMC',
  '/registrasi/pemeriksaan_hitung_umur_pasien/read?tanggal_lahir=2004-02-04&kode_rs=W01&kode_lab=LAB_SMC'
];

export function getBeforeRegis() {
  const requests = GET_ENDPOINTS_BEFORE.map(endpoint => {
    const url = `${BASE_URL_DEMO}${endpoint}`;
    return http.get(url);
  });

  requests.forEach(req => {
    check(req, {
      'status is 200': (r) => r.status === 200,
      'response time is less than 500ms': (r) => r.timings.duration < 500,
      'response time is less than 1s': (r) => r.timings.duration < 1000,
      'response time is less than 2s': (r) => r.timings.duration < 2000,
      'response time is less than 5s': (r) => r.timings.duration < 5000,
    });
  });
}

export default function() {
  getBeforeRegis();
}
