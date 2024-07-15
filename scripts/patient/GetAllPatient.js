import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const GET_ENDPOINTS_DAFTAR_PASIEN = [
    '/datamaster/flag_aktif/read?&kode_rs=W01&kode_lab=LAB_SMC',
    '/registrasi/pemeriksaan_pasien_registrasi/read?all=&no_reg_rs=&page=0&page_size=10&jenis_regis=patologi&kode_rs=W01&kode_lab=LAB_SMC',
    '/datamaster/custom_oem_lis/read?&page=0&page_size=1&kode_rs=W01&kode_lab=LAB_SMC',
    '/datamaster/custom_bridging_lis/read?page=0&page_size=1&kode_rs=W01&kode_lab=LAB_SMC',
    '/datamaster/custom_barcode_lis/read?page=0&page_size=1&kode_rs=W01&kode_lab=LAB_SMC'
];

export function getDataDaftarPasien() {
    const requests = GET_ENDPOINTS_DAFTAR_PASIEN.map(endpoint => {
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
