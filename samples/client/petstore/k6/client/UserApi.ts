// @ts-ignore
import http from 'k6/http';
// @ts-ignore
import { FileData } from 'k6/http';

import { User } from './User.js';

export class UserApi {

    constructor(private baseUrl: string) {}

    /**
    * @returns { undefined } - 0
    */
    public createUser(user: User): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user`;

        const reqHeaders = {
            'Content-Type': `application/json`
        };

        const { code, headers: resHeaders, body } = http.post(url, user, { headers: reqHeaders });

        return { code, headers: resHeaders, body: body as undefined };
    }
    /**
    * @returns { undefined } - 0
    */
    public createUsersWithArrayInput(user: User[]): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user/createWithArray`;

        const reqHeaders = {
            'Content-Type': `application/json`
        };

        const { code, headers: resHeaders, body } = http.post(url, user, { headers: reqHeaders });

        return { code, headers: resHeaders, body: body as undefined };
    }
    /**
    * @returns { undefined } - 0
    */
    public createUsersWithListInput(user: User[]): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user/createWithList`;

        const reqHeaders = {
            'Content-Type': `application/json`
        };

        const { code, headers: resHeaders, body } = http.post(url, user, { headers: reqHeaders });

        return { code, headers: resHeaders, body: body as undefined };
    }
    /**
    * @returns { undefined } - 400
    * @returns { undefined } - 404
    */
    public deleteUser(username: string): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user/${username}`;

        const { code, headers: resHeaders, body } = http.delete(url);

        return { code, headers: resHeaders, body: body as undefined };
    }
    /**
    * @returns { User } - 200
    * @returns { undefined } - 400
    * @returns { undefined } - 404
    */
    public getUserByName(username: string): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: User | undefined,
    } {
        const url: string = `${this.baseUrl}/user/${username}`;

        const { code, headers: resHeaders, body } = http.get(url);

        return { code, headers: resHeaders, body: body as User | undefined };
    }
    /**
    * @returns { string } - 200
    * @returns { undefined } - 400
    */
    public loginUser(username: string, password: string): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: string | undefined,
    } {
        const url: string = `${this.baseUrl}/user/login?username=${username}&password=${password}`;

        const { code, headers: resHeaders, body } = http.get(url);

        return { code, headers: resHeaders, body: body as string | undefined };
    }
    /**
    * @returns { undefined } - 0
    */
    public logoutUser(): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user/logout`;

        const { code, headers: resHeaders, body } = http.get(url);

        return { code, headers: resHeaders, body: body as undefined };
    }
    /**
    * @returns { undefined } - 400
    * @returns { undefined } - 404
    */
    public updateUser(username: string, user: User): {
        code: number,
        headers: {
            [key: string]: string,
        },
        body?: undefined,
    } {
        const url: string = `${this.baseUrl}/user/${username}`;

        const reqHeaders = {
            'Content-Type': `application/json`
        };

        const { code, headers: resHeaders, body } = http.put(url, user, { headers: reqHeaders });

        return { code, headers: resHeaders, body: body as undefined };
    }
}
