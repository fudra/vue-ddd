import { createApp } from 'vue'
import App from '@/modules/app/App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { ModuleManager } from './modules/share/types';
import { createI18n } from 'vue-i18n'

import moduleManager from '@/plugins/modules';

/**Modules */
import appModule from '@/modules/app';
import exampleModule from '@/modules/example';
import fooModule from '@/modules/foo';

/* Services */
import messagingService from '@/services/messaging';
import triggerServcie from '@/services/trigger';



createApp(App)
    .use(moduleManager, {
        modules: [
            appModule,
            exampleModule,
            fooModule,
        ],
        services: [
            messagingService,
            triggerServcie,
        ],
        router,
        config: {
            locale: {
                locale: 'de',
                fallbackLocale: 'en',
            }
        }
    } as ModuleManager)
    .use(createPinia())
    .use(router)
    .mount('#app')

