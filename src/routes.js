// URL scheme (one path per application):
//   /sun, /yes, /phoenix                         application dashboard
//   /sun/menu/<module>[/<option code>...]        module menu or sub-menu
//   /sun/screen/<screen id>                      legacy screen
export const APPLICATION_KEYS = ['sun', 'yes', 'phoenix']
export const DEFAULT_APPLICATION = 'sun'

const decode = (segment) => {
  try { return decodeURIComponent(segment) } catch { return segment }
}

export function parseLocation(pathname = '/') {
  const parts = pathname.split('/').filter(Boolean).map(decode)
  const application = APPLICATION_KEYS.includes(parts[0]) ? parts[0] : null
  if (!application) return { application: DEFAULT_APPLICATION, route: { type: 'home' }, canonical: false }
  if (parts[1] === 'menu' && parts[2]) return { application, route: { type: 'module', module: parts[2], path: parts.slice(3) }, canonical: true }
  if (parts[1] === 'screen' && parts[2] && parts.length === 3) return { application, route: { type: 'screen', id: parts[2] }, canonical: true }
  return { application, route: { type: 'home' }, canonical: parts.length === 1 }
}

export function toPath(application, route) {
  const encode = encodeURIComponent
  if (route?.type === 'module') return `/${application}/menu/${[route.module, ...(route.path ?? [])].map(encode).join('/')}`
  if (route?.type === 'screen') return `/${application}/screen/${encode(route.id)}`
  return `/${application}`
}
