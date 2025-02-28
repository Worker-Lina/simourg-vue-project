import { ComponentCustomProperties } from "vue";
import { formatNumber } from "@/utils/formatNumber";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $formatNumber: typeof formatNumber;
    }
}