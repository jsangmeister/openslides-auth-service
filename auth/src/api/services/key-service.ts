import { KeyHandler } from '../interfaces/key-handler';

export class KeyService extends KeyHandler {
    protected tokenKey = '';
    protected cookieKey = '';

    public constructor() {
        super();

        // Load key files early to detect missing ones
        this.loadKeys();
    }

    public getCookieKey(): string {
        return this.cookieKey;
    }

    public getTokenKey(): string {
        return this.tokenKey;
    }

    private loadKeys(): void {
        if (!process.env.AUTH_TOKEN_KEY) {
            throw new Error('No token key defined.');
        }
        this.tokenKey = process.env.AUTH_TOKEN_KEY;

        if (!process.env.AUTH_COOKIE_KEY) {
            throw new Error('No cookie key defined.');
        }

        this.cookieKey = process.env.AUTH_COOKIE_KEY;
    }
}
