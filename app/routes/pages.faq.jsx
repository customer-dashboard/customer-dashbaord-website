// src/routes/oldUrl.js

import { redirect } from '@remix-run/node';

export async function loader({ request }) {
  const oldUrlPrefix = "https://customerdashboard.pro/pages/faq";
  const newUrl = "https://customerdashboard.pro/faq";

  // Requested URL ke prefix ko check karein
  if (request.url.startsWith(oldUrlPrefix)) {
    // Purane URL ka prefix hata kar naya URL banaayein
    const remainingPath = request.url.slice(oldUrlPrefix.length);
    const newRedirectUrl = `${newUrl}${remainingPath}`;

    return redirect(newRedirectUrl);
  }

  // Agar requested URL purane URL ke saath match nahi karta, to normal response de
  return { status: 200, body: "Remix Run mein swagat hai!" };
}
