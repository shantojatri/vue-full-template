import type { Pinia } from 'pinia'

export function registerModuleStores(pinia: Pinia, stores: any[]) {
  stores.forEach((fn) => fn()(pinia))
}
