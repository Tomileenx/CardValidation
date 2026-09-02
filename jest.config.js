import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset();

export default {
    testEnvironment: "node",
    ...presetConfig,
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};