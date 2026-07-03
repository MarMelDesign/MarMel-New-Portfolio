import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'marmel-space-posters-v2'

const listeners = new Set()
let posters = loadPosters()

function loadPosters() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persist() {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posters))
}

function emit() {
  listeners.forEach((listener) => listener())
}

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

export function addPoster(present) {
  const poster = {
    id: makeId(),
    createdAt: Date.now(),
    logoStyle: present.logoStyle,
    color: present.color,
    typography: present.typography,
    icon: present.icon,
    mascot: present.mascot,
    name: present.name,
    description: present.description,
  }
  posters = [poster, ...posters]
  persist()
  emit()
  return poster
}

export function getPosters() {
  return posters
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getServerSnapshot() {
  return []
}

export function useMarmelSpacePosters() {
  return useSyncExternalStore(subscribe, getPosters, getServerSnapshot)
}
