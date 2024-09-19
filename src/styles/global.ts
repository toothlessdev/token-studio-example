import { css } from "@emotion/react";

import token from "../../design/token.json";

export const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }

    :root {
        --color-red: ${token.global.red.value};
        --color-blue: ${token.global.blue.value};
        --color-green: ${token.global.green.value};
    }
`;
