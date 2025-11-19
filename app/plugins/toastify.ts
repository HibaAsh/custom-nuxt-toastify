// plugins/toastify.ts
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
// import type { IconProps } from 'vuetify';

// const ResolveCustomIcon = (props: IconProps) => {
//   switch (props.type) {
//     case 'default':
//       return '👌';
//     case 'loading':
//       return '⏳';
//     case 'info':
//       return '🎈';
//     case 'success':
//       return '✌️';
//     case 'error':
//       return '🤣';
//     case 'warning':
//       return '😢';
//     default:
//       return undefined;
//   }
// };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    position: 'top-right',
    transition: 'slide', // bounce, flip, zoom, slide
    multiple: true,
    limit: 5,
    expandCustomProps: true,
    // icon: false,
    // icon: ResolveCustomIcon,
    autoClose: 3000,
    theme: 'dark', // -> full-color
    // rtl: true, // for the content inside
    // delay: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
  } as ToastContainerOptions)
})