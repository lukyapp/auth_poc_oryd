// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
