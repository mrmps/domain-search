'use server';

import { redirect } from 'next/navigation';

export async function navigate(data: FormData) {
  redirect('/search?q=' + data.get('q'));
}

export async function openUrl(url: string) {
  window.open(url, '_blank');
}