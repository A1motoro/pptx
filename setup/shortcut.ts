import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

// 需要解绑的 key（直接翻页的上下键），解绑后改为点击行为
const UNBIND_KEYS = ['arrowdown', 'arrowup', 'pagedown', 'pageup', 'down', 'up']

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  // 移除默认的上下键直接翻页绑定
  const filtered = base.filter(s => {
    const k = String(s.key).toLowerCase()
    return !UNBIND_KEYS.includes(k)
  })
  return [
    ...filtered,
    // 上下键改为 nav.next/prev（点击行为），适配翻页笔
    { key: 'ArrowDown', fn: () => nav.next(), autoRepeat: true },
    { key: 'ArrowUp', fn: () => nav.prev(), autoRepeat: true },
    { key: 'PageDown', fn: () => nav.next(), autoRepeat: true },
    { key: 'PageUp', fn: () => nav.prev(), autoRepeat: true },
  ]
})