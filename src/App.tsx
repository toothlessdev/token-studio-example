import { Global } from "@emotion/react";
import { globalStyle } from "./styles/global";
import { Box } from "./components/Box";
import { css } from "@emotion/css";

import token from "../design/token.json";

export default function App() {
    return (
        <div>
            <Global styles={[globalStyle]} />

            <div
                className={css`
                    display: flex;
                `}>
                <Box bgColor={token.global.red.value} />
                <Box bgColor="var(--color-blue)" />
                <Box bgColor="var(--color-green)" />
            </div>
        </div>
    );
}
