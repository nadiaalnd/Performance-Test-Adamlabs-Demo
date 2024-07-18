import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const POST_ENDPOINTS_AFTER = [
  '/transaksi/pemeriksaan_pasien_arsip/create?&kode_rs=W01&kode_lab=LAB_SMC'
];

const payload = JSON.stringify({
  "no_lab": "RS0/240716/0002",
  "registrasi_id": 13,
  "status_terbit": true
});

const params = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export function postPemeriksaanArsip() {
  const requests = POST_ENDPOINTS_AFTER.map(endpoint => {
    const url = `${BASE_URL_DEMO}${endpoint}`;
    return http.post(url, payload, params);
  });

  requests.forEach(req => {
    check(req, {
      'status is 200': (r) => r.status === 200,
      'response time is less than 500ms': (r) => r.timings.duration < 500,
      'response time is less than 1s': (r) => r.timings.duration < 1000,
      'response time is less than 2s': (r) => r.timings.duration < 2000,
      'response time is less than 5s': (r) => r.timings.duration < 5000,
      'response time is less than 10s': (r) => r.timings.duration < 10000,
    });
  });
}
