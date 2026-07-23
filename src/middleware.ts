import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith('/api/keystatic')) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto = context.request.headers.get('x-forwarded-proto');

    if (forwardedHost && forwardedProto) {
      const correctUrl = new URL(context.request.url);
      correctUrl.host = forwardedHost;
      correctUrl.protocol = forwardedProto;
      
      Object.defineProperty(context.request, 'url', {
        value: correctUrl.toString(),
        writable: false,
      });
    }
  }
  return next();
});