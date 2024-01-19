// src/routes/pages/faq.js

import { redirect } from '@remix-run/node';

export async function loader() {
  const newUrl = "/faqs";
  
  // Sirf redirect karein, kuch aur na dikhaayein
  return redirect(newUrl);
}
