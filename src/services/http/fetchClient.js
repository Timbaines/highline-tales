import ApiError from './ApiError.js';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

export async function fetchJson(url, { method = 'GET', headers = {}, body, timeoutMs = 10000, retries = 0 } = {}) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, {
            method,
            headers: { 'Accept': 'application/json', ...headers },
            body,
            signal: controller.signal,
        });
        if (!res.ok) {
            let details;
            try { details = await res.json(); } catch {
                try { details = await res.text(); } catch {}
            }
            throw new ApiError(`HTTP ${res.status}`, { status: res.status, details, cause: res });
        }
        return await res.json();
    } catch (err) {
        if (retries > 0 && (err.name === 'AbortError' || err instanceof TypeError)) {
            await sleep(250 * (2 ** (retries - 1))); // simple backoff
            return fetchJson(url, { method, headers, body, timeoutMs, retries: retries - 1 });
        }
        if (err instanceof ApiError) throw err;
        throw new ApiError(err.message || 'Network error', { code: 'NETWORK', cause: err });
    } finally {
        clearTimeout(t);
    }
}