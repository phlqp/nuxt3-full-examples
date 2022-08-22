export default defineEventHandler((event) => {
    return event.req.rawHeaders
  })