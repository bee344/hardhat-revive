import { HardhatUserConfig } from "hardhat/config";
import "hardhat-resolc/src/index"

const config: HardhatUserConfig = {
    solidity: "0.8.28",
    networks: {
        polkavm: {
            url: `http://127.0.0.1:8545`
        },
    },
    resolc: {
        compilerSource: 'binary',
        settings:
        {
            /**
             * Path to the `resolc` binary
             */
            compilerPath: '/path/to/resolc',
            /**
             * Output PolkaVM assembly of the contracts.
             */
            asm: true,
            /**
             * Whether to emit or not debug info.
             */
            emitDourceDebugInfo: true,
            /**
             * Specify a path where we want the debug info stored at.
             */
            debugOutputDir: '/path/to/debug/output',
            /**
             * Specify a path where we want the compiled files to be stored at.
             */
            outputDir: '/path/to/output',
            evmVersion: "istanbul"
        },
    },
};

export default config;