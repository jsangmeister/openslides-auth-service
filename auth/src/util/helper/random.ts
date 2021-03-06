import crypto from 'crypto';

export namespace Random {
    /**
     * Generates a cryptographically key with a specified key length.
     *
     * @param length The length of the returned string. Defaults to `32`.
     *
     * @returns The generated key.
     */
    export function cryptoKey(length: number = 32): string {
        return crypto
            .randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length);
    }
}
