import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const ENDPOINTS = {
  create_regis: '/pemeriksaan_pasien_registrasi/create?&kode_rs=W01&kode_lab=LAB_SMC',
  create_catatan_internal: '/catatan_internal/create?kode_rs=W01&kode_lab=LAB_SMC',
};

const headers = {
  'Content-Type': 'application/json',
};

// Payloads
const createRegisPayload = {
  "registrasi": {
    "id": null,
    "no_lab": null,
    "no_reg_rs": "11240",
    "no_antrian": null,
    "waktu_antrian": null,
    "keterangan_klinis": "-",
    "diagnosa_awal": "-",
    "action_checkin": "",
    "action_selesai": "",
    "jenis_registrasi": "reguler",
    "jenis_mikro_patologi": "patologi"
  },
  "paket_pemeriksaans": [],
  "non_paket_pemeriksaans": [
    {
      "kode_item_pemeriksaan": "RBC",
      "id_transaksi": null
    }
  ],
  "pasien": {
    "no_rm": "1234",
    "nama": "test01",
    "tanggal_lahir": "2004-02-04",
    "umur_tahun": 20,
    "umur_bulan": 5,
    "umur_hari": 7,
    "ras": "-",
    "alamat": "Jl. Testing",
    "m_provinsi_id": "35",
    "m_kabupaten_id": "3578",
    "m_kecamatan_id": "3578080",
    "jenis_identitas": "KTP",
    "no_identitas": "1234567890123456",
    "jenis_kelamin": "P",
    "no_telphone": "089765432222"
  },
  "dokter_pengirim": {
    "kode": "umum"
  },
  "unit_asal": {
    "kode": "ruang"
  },
  "penjamin": {
    "kode": "2"
  },
  "icdt": {
    "kode": "-"
  },
  "status": true,
  "inputBarcode": 0,
  "jenis_pemeriksaan": ""
};

const createCatatanInternalPayload = {
  "no_lab": "W01/240714/0002",
  "catatan": "Test",
  "reply_id": "7"
};

export function postDataRegis() {
  const regisUrl = `${BASE_URL_DEMO}${ENDPOINTS.create_regis}`;
  const catatanUrl = `${BASE_URL_DEMO}${ENDPOINTS.create_catatan_internal}`;

  const regisPayload = JSON.stringify(createRegisPayload);
  const catatanPayload = JSON.stringify(createCatatanInternalPayload);

  const regisResponse = http.post(regisUrl, regisPayload, { headers });
  check(regisResponse, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });

  const catatanResponse = http.post(catatanUrl, catatanPayload, { headers });
  check(catatanResponse, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
    'response time is less than 1s': (r) => r.timings.duration < 1000,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
    'response time is less than 5s': (r) => r.timings.duration < 5000,
  });
}

export const options = {
  vus: 4,
  duration: '30s',
};

let cycle = 1;
let run = 1;

export default function() {
  postDataRegis();
  sleep(1);

  console.log(`Cycle: ${cycle}, Run: ${run}, Current VU: ${__VU}, Iteration: ${__ITER}`);

  // cycle & run
  if (__ITER % 2 === 0) {
    run++;
    if (run > 2) {
      run = 1;
      cycle++;
    }
  }
}
