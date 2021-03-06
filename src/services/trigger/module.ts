import { inject, h, ComponentOptionsMixin } from "vue";
import { Emitter } from "mitt";
import { EmitterInjectionKey } from "@/plugins/modules";


export default {
    setup() {
        const emitter = inject<Emitter<any>>(EmitterInjectionKey);
        
        setInterval(() => {
            emitter?.emit("time:interval"),
            console.log("time:interval called");
        }, 5000)

        // dummy element
        return () => h("div")
    } 
} as ComponentOptionsMixin