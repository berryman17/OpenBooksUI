
const CLIENT_ID = "0oa4d95gcnbAZeEcG357";
const ISSUER = "https://dev-309611.okta.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK = false;

export const config = {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: 'https://192.168.1.10:3000/auth/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
        tokenManager: {
            storage: "sessionStorage"
        }
    },
    api: {
        server: process.env.API_SERVER || "https://192.168.1.10:8443",
        basePath: process.env.API_BASE_PATH || "/api/v1",
    },
    redux: {
        // devMode enables store logging
        devMode: true
    },
    ui: {
        initialViewPath: "/dashboard"
    },

    getServerPath() {
        return this.api.server + this.api.basePath;
    }
}