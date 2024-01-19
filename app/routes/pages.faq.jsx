// src/routes/oldUrl.js

import { redirect } from '@remix-run/node';

export async function loader({ request }) {
  const oldUrlPrefix = "http://localhost:3000/pages/faq";
  const newUrl = "http://localhost:3000/faqs";

  // Requested URL ke prefix ko check karein
  if (request.url.startsWith(oldUrlPrefix)) {
    // Purane URL ka prefix hata kar naya URL banaayein
    const remainingPath = request.url.slice(oldUrlPrefix.length);
    const newRedirectUrl = `${newUrl}${remainingPath}`;

    // Sirf redirect karein, kuch aur na dikhaayein
    return redirect(newRedirectUrl);
  }

  // Agar requested URL purane URL ke saath match nahi karta, to normal response de
  return { status: 200, body: "Remix Run mein swagat hai!" };
}
