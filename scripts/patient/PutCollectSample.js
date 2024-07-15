import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL_TEST, BASE_URL_DEMO } from '../../config/config.js';

const PUT_ENDPOINTS_AMBIL_SAMPLE = [
    '/tat/update_waktu_sample_tat/edit?no_lab=W01/240711/0002&kode_rs=W01&kode_lab=LAB_SMC'
];

const payload = JSON.stringify({
    waktu_sample: '2024-07-12 05:40:30'
});

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export function putDataAmbilSample() {
    const requests = PUT_ENDPOINTS_AMBIL_SAMPLE.map(endpoint => {
        const url = `${BASE_URL_DEMO}${endpoint}`;
        return http.put(url, payload, params);
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
