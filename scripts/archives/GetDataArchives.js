import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const GET_ENDPOINTS_AFTER = [
  '/archive/arsip/read?all=&page=0&page_size=10000&start_date=&end_date=&status_pemeriksaan=&nama_unit_asal=&kode_rs=W01&kode_lab=LAB_SMC'
];

export function getPemeriksaanArsip() {
  const requests = GET_ENDPOINTS_AFTER.map(endpoint => {
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
