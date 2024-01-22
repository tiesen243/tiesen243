import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: 'numeric' })
